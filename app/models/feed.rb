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

  def schedule_next_poll
    last_poll_at = DateTime.now.utc
    next_poll_at = last_poll_at + interval
  end
end
