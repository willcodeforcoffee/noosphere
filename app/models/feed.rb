class Feed < ApplicationRecord
  # See https://en.wikipedia.org/wiki/ISO_8601#Durations for how to create
  # proper ActiveSupport::Duration.
  # eg ActiveSupport::Duration.parse("PT24H") => 24 hours
  attribute :polling_interval, :interval
  validates :name, presence: true
  validates :url, presence: true

  has_many :feed_entries

  scope :unscheduled, -> { where(next_poll_at: nil) }
  scope :due_for_poll,
        -> {
          last_poll_succeeded.and(
            Feed.unscheduled.or(
              Feed.where('next_poll_at <= ?', DateTime.now.utc),
            ),
          )
        }
  scope :last_poll_failed, -> { where.not(last_poll_error_at: nil) }
  scope :last_poll_succeeded, -> { where(last_poll_error_at: nil) }

  def poll
    feed_doc = fetch_feed_document

    process_feed(feed_doc)

    schedule_next_poll
    save
  rescue RSS::NotWellFormedError => e
    logger.error "Feed parsing failed with NotWellFormedError #{e}"
    store_error(feed_doc, e)
  rescue StandardError => e
    logger.error "Feed parsing failed with #{e}"
    store_error(feed_doc, e)
  end

  def process_feed(feed_doc)
    parsed_doc = RSS::Parser.parse(feed_doc)
    self.name = parsed_doc&.title&.content if self.name.blank?
    self.last_document = feed_doc

    parsed_doc.items.each do |item|
      logger.debug("item: #{item.class}")
      FeedEntry.process_feed_item(self, item)
    end

    parsed_doc
  end

  def schedule_next_poll
    self.last_poll_at = DateTime.now.utc
    self.next_poll_at = (self.last_poll_at + self.polling_interval).utc
    self.last_poll_error = nil
    self.last_poll_error_at = nil
  end

  def fetch_feed_document
    raw_doc = ''
    URI.open(self.url) do |f|
      f.each_line do |line|
        raw_doc += line
        raw_doc += "\n"
      end
    end

    raw_doc
  end

  def fetch_parsed_document
    RSS::Parser.parse(fetch_feed_document)
  end

  private

  def store_error(feed_doc, error)
    update(
      last_document: feed_doc,
      last_poll_error: error.message,
      last_poll_error_at: DateTime.now.utc,
    )
  end
end
