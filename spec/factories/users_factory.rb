FactoryBot.define do
  factory :user do
    username { 'guth_bandar' }
    email_address { 'guth.bandar@institute-for-historical-inquiry.edu' }
    state { 'MyString' } # TODO
    user_credential { create(:user_credential) }
    roles { ['social'] }

    trait :admin do
      roles { ['admin'] }
    end
  end
end
