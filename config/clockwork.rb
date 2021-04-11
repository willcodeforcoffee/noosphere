require 'clockwork'

require_relative '../config/boot'
require_relative '../config/environment'

# https://github.com/Rykian/clockwork
module Clockwork
  configure do |config|
    # config[:sleep_timeout] = 5
    config[:logger] = Rails.logger
    config[:tz] = ENV.fetch('TZ', 'UTC')
    # config[:max_threads] = 15
    # config[:thread] = true
  end

  # handler receives the time when job is prepared to run in the 2nd argument
  handler { |job, time| puts "Running #{job}, at #{time}" }

  #   every(1.day, 'CurrencyUpdate', :at => '00:00', :tz => 'UTC') do
  #     CurrencyUpdateWorker.new.update_all
  #   end
end
