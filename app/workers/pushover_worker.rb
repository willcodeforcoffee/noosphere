class PushoverWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(id)
    logger.info("Loading Notification ID [#{id}]")
    pushover_notification =
      Communication::Notification::Pushover.find_by(id: id)
    if pushover_notification.blank?
      logger.error(
        "Failed to load Communication::Notification::Pushover with ID #{id}",
      )
      return
    end

    begin
      logger.info("Delivering Pushover Notification [#{id}]")
      pushover_notification.deliver

      logger.info('Notification delivered')
    rescue StandardError => e
      logger.error(
        "Failed to deliver Communication::Notification::Pushover with ID #{id}",
      )
      logger.error e
    end

    true
  end
end
