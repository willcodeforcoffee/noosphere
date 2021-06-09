class Feed < ApplicationRecord
  # See https://en.wikipedia.org/wiki/ISO_8601#Durations for how to create
  # proper ActiveSupport::Duration.
  # eg ActiveSupport::Duration.parse("PT24H") => 24 hours
  attribute :polling_interval, :interval
  validates :name, presence: true
  validates :url, presence: true
end
