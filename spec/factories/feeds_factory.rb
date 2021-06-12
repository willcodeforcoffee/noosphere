FactoryBot.define do
  factory :feed do
    name { "#{Faker::Name.name} Blog" }
    url { Faker::Internet.url(path: '/feed/rss.xml') }
    polling_interval { ActiveSupport::Duration.parse('PT24H') }
    last_poll_at { nil }
    next_poll_at { nil }

    trait :due_for_poll do
      last_poll_at { 25.hours.ago.utc }
      next_poll_at { 1.second.ago.utc }
    end

    trait :polled_recently do
      last_poll_at { 1.second.ago.utc }
      next_poll_at { 24.hours.from_now.utc }
    end
  end
end
