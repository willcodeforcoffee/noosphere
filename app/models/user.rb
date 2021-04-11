class User < ApplicationRecord
  ROLES = %w[admin social].freeze
  belongs_to :user_credential

  validates :username, presence: true, length: { in: 3..30 }, uniqueness: true
  validates :email_address, presence: true
  validates :roles, inclusion: { in: ROLES }

  def self.public_user
    User.new({ username: nil, email_address: nil, roles: [] })
  end

  def in_role?(role)
    roles.include?(role)
  end
end
