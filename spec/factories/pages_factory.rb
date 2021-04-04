FactoryBot.define do
  factory :page do
    url { "/test" }
    title { "Test Page" }
    description { "This is a test page" }
    publish_date { "2021-04-04 02:47:35" }
  end
end
