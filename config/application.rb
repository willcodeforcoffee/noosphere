require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Noosphere
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.1

    config.active_job.queue_adapter = :sidekiq

    config.action_mailer.default_url_options = { host: ENV['HOST_NAME']&.downcase }

    # SystemEmailer emails should only go to the sysop(s) so a default :to must be set in the :defaults
    config.x.mailers.enable_smtp_sending = Rails.env.production? || ENV['ENABLE_SMTP_SENDING']&.downcase == 'true'
    config.x.mailers.system_mailer = {
      default: {
        from: ENV['SYSTEM_MAILER_DEFAULT_FROM_ADDRESS'],
        to: ENV['SYSTEM_MAILER_DEFAULT_RECIPIENT_ADDRESS'],
      },
    }

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
    config.x.pushover.token = ENV['PUSHOVER_TOKEN']
    config.x.pushover.user_key = ENV['PUSHOVER_USERKEY']
  end
end
