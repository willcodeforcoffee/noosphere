class Feed < ApplicationRecord
  attribute :polling_interval, :interval
  validates :name, presence: true
  validates :url, presence: true
end
