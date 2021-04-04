FactoryBot.define do
  factory :user_credential do
    email { 'guth.bandar@institute-for-historical-inquiry.edu' }
    password { 'Password123' }
    password_confirmation { 'Password123' }
  end
end
