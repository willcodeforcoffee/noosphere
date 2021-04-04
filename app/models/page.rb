class Page < ApplicationRecord
  validates :url, presence: true, length: { in: 2..255 }, uniqueness: true
end
