FactoryBot.define do
  factory :feed_entry, class: 'Social::FeedEntry' do
    feed { build(:feed) }
    entry_id { Faker::Internet.url }
    title { Faker::Book.title }
    url { Faker::Internet.url }
    description { Faker::Lorem.sentence }
    author { Faker::Name.name }
    published_at { 1.day.ago.utc }
  end
end
