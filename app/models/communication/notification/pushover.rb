module Communication
  module Notification
    class Pushover < ApplicationRecord
      include AASM

      validates :message, presence: true

      aasm column: :status do
        state :ready, initial: true
        state :queued
        state :delivered
        state :failed

        event :queue_delivery do
          transitions from: :ready, to: :queued, guards: [:valid?, :ready?],
                      before_exit: :schedule_pushover_notification_delivery
        end

        event :retry_delivery do
          transitions from: :failed, to: :queued, guards: [:valid?, :failed?],
                      before_exit: :retry_pushover_notification_delivery
        end

        event :deliver do
          transitions from: [:ready, :queued], to: :delivered, guards: [:valid?],
                      before_exit: :deliver_notification, error: :delivery_failed
        end
      end

      private

      def can_retry_delivery?
        failed?
      end

      def schedule_pushover_notification_delivery
        PushoverWorker.new.perform_async(id)
        true
      end

      def retry_pushover_notification_delivery
        self.retries = 0 if retries.nil?
        self.retries += 1
        save!

        schedule_pushover_notification_delivery
      end

      def deliver_notification
        logger.info("Delivering Pushover Notification [#{id}]")
        message = build_pushover_message
        self.receipt = message.push
        # TODO: validate response
        self.sent_at = DateTime.now.utc
        save!
        true
      end

      def delivery_failed
        logger.error('Delivery Failed callback')
      end

      def build_pushover_message
        Pushover::Message.new({
                                token: Rails.configuration.x.pushover.token,
                                user: Rails.configuration.x.pushover.user_key,
                                title: title || 'Bandar Notification',
                                message: message,
                              })
      end
    end
  end
end
