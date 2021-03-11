class Fake
  include ActiveModel::Model
  attr_accessor :name, :email, :address, :message, :suggestion

  validates :name, presence: true
  validates :email, presence: true, length: {in:5..255}
  validates :address, presence: true
  validates :message, presence: true
  validates :suggestion, presence: true
end
