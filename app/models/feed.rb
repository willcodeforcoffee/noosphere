class Feed < ApplicationRecord
  # See https://en.wikipedia.org/wiki/ISO_8601#Durations for how to create
  # proper ActiveSupport::Duration.
  # eg ActiveSupport::Duration.parse("PT24H") => 24 hours
  attribute :polling_interval, :interval
  validates :name, presence: true
  validates :url, presence: true

  scope :unscheduled, -> { where(next_poll_at: nil) }
  scope :due_for_poll,
        -> { unscheduled.or(Feed.where('next_poll_at <= ?', DateTime.now.utc)) }

  def poll
    raw_doc = read_document

    process_feed(raw_doc)

    schedule_next_poll
    save
  end

  def schedule_next_poll
    self.last_poll_at = DateTime.now.utc
    self.next_poll_at = (self.last_poll_at + self.polling_interval).utc
  end

  private

  def read_document
    raw_doc = ''
    URI.open(self.url) do |f|
      f.each_line do |line|
        raw_doc += line
        raw_doc += "\n"
      end
    end

    raw_doc
  end

  def process_feed(raw_doc)
    parsed_doc = RSS::Parser.parse(raw_doc)
    self.name = parsed_doc&.title&.content unless self.name.present?
    self.last_document = raw_doc

    parsed_doc
  rescue RSS::NotWellFormedError e
    # TODO: Handle errors
  end
end
