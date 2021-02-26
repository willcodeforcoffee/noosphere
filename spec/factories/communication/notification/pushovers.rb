FactoryBot.define do
  factory :communication_notification_pushover, class: 'Communication::Notification::Pushover' do
    title { 'Pushover Notification' }
    message { 'This is a Pushover Notification' }
    device { 'TestDevice1' }
    sent_at { nil }
    retries { 0 }
  end
end
