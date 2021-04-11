class Feature < ApplicationRecord
  validates :name, presence: true, length: { in: 1..30 }, uniqueness: true

  class FeatureNotFoundError < StandardError
    def initialize(feature_name)
      super("Feature [#{feature_name}] does not exist")
    end
  end

  def enable!
    update!(enabled: true)
  end

  def disable!
    update!(enabled: false)
  end
end
