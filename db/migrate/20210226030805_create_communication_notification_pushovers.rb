class CreateCommunicationNotificationPushovers < ActiveRecord::Migration[6.1]
  def change
    create_table :communication_notification_pushovers do |t|
      t.string :title
      t.string :message, null: false
      t.string :device
      t.string :status, null: false
      t.datetime :sent_at
      t.integer :retries, null: false, default: 0
      t.json :receipt

      t.timestamps
    end
  end
end
