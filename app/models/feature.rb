class Feature < ApplicationRecord
  validates :name, presence: true, length: { in: 1..30 }, uniqueness: true

  def enable!
    update!(enabled: true)
  end

  def disable!
    update!(enabled: false)
  end
end
