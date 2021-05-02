module Mutations
  class PushoverNotification < BaseMutation
    field :result, String, null: false

    argument :message, String, required: true

    def resolve(message:)
      pushover = Communication::Notification::Pushover.new({ message: message })
      pushover.queue_delivery!

      { result: 'OK' }
    end
  end
end
