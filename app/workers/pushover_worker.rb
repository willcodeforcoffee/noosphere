class PushoverWorker
  include Sidekiq::Worker

  def perform(id)
    logger.info("Delivering Pushover Notification [#{id}]")
    pushover_notification = Communication::Notification::Pushover.find_by(id: id)
    if pushover_notification.blank?
      logger.error("Failed to load Communication::Notification::Pushover with ID #{id}")
      return
    end

    begin
      pushover_notification.deliver
    rescue StandardError => e
      logger.error(
        "Failed to deliver Communication::Notification::Pushover with ID #{id}: #{e&.message || 'unknown message'}",
      )
    end
  end
end
