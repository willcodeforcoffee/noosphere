Sidekiq.configure_server do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6121/0') }
  config.logger.level = Rails.logger.level
end

Sidekiq.configure_client do |config|
  config.redis = { url: ENV.fetch('REDIS_URL', 'redis://localhost:6121/0') }
  config.logger.level = Rails.logger.level
end
