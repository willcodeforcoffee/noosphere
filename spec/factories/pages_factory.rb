FactoryBot.define do
  factory :page do
    url { "/test" }
    title { "Test Page" }
    description { "This is a test page" }
    published_at { nil }

    trait :published do
      published_at { 1.hour.ago }
    end
  end
end
