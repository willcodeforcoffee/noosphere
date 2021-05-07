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

        # Put the message onto the Queue for async delivery
        event :queue_delivery do
          transitions from: :ready,
                      to: :queued,
                      guards: %i[valid?],
                      after: :schedule_pushover_notification_delivery,
                      error: :delivery_failed
        end

        event :retry_delivery do
          transitions from: %i[failed delivered],
                      to: :queued,
                      guards: %i[valid?],
                      before: :retry_pushover_notification_delivery,
                      error: :delivery_failed
        end

        # Deliver the message directly through Pushover
        # This can be done manually but in practice use :queue_delivery instead.
        event :deliver do
          transitions from: %i[ready queued],
                      to: :delivered,
                      guards: %i[valid?],
                      after: :deliver_notification,
                      error: :delivery_failed
        end
      end

      private

      def can_retry_delivery?
        failed?
      end

      # If id is blank make sure you've saved first!
      def schedule_pushover_notification_delivery
        logger.info "Scheduling Pushover Notification [#{self.id}]"
        PushoverWorker.perform_async(self.id)
        true
      end

      def retry_pushover_notification_delivery
        self.retries = 0 if retries.nil?
        self.retries += 1
        save!

        schedule_pushover_notification_delivery
      end

      def deliver_notification
        logger.info "Delivering Pushover Notification [#{self.id}]"
        pushover_message = build_pushover_message
        self.receipt = pushover_message.push

        # TODO: validate response
        self.sent_at = DateTime.now.utc
        self.save!

        true
      end

      def delivery_failed
        logger.error('Delivery Failed')
      end

      def build_pushover_message
        ::Pushover::Message.new(
          {
            token: Rails.configuration.x.pushover.token,
            user: Rails.configuration.x.pushover.user_key,
            title: self.title || 'Noosphere Notification',
            message: self.message,
          },
        )
      end
    end
  end
end
