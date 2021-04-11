class Page < ApplicationRecord
  validates :url, presence: true, length: { in: 2..255 }, uniqueness: true

  scope :published,
        -> {
          where('published_at IS NOT NULL AND published_at <= ?', DateTime.now)
        }
end
