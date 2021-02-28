class User < ApplicationRecord
  belongs_to :user_credential

  validates :username, presence: true, length: { in: 3..30 }, uniqueness: true
  validates :email_address, presence: true
end
