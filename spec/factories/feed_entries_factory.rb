FactoryBot.define do
  factory :feed_entry do
    feed { build(:feed) }
    title { Faker::Book.title }
    url { Faker::Internet.url }
    description { Faker::Lorem.sentence }
    author { Faker::Name.name }
    published_at { 1.day.ago.utc }
  end
end
