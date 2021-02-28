FactoryBot.define do
  factory :user do
    username { 'guth_bandar' }
    email { 'guth.bandar@institute-for-historical-inquiry.edu' }
    state { 'MyString' }
    user_credential { create(:user_credential) }
  end
end
