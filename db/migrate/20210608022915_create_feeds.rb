class CreateFeeds < ActiveRecord::Migration[6.1]
  def change
    create_table :feeds do |t|
      t.string :name, null: false
      t.string :name_override, null: true
      t.string :url, null: false
      t.text :description, null: true
      t.string :tags, array: true
      t.interval :polling_interval, null: false, default: 43_200
      t.datetime :last_poll_at, null: true
      t.datetime :next_poll_at, null: true
      t.text :last_document, null: true

      t.timestamps
    end
  end
end
