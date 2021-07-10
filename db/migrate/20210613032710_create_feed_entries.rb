class CreateFeedEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :feed_entries do |t|
      t.references :feed, null: false, foreign_key: true
      t.string :entry_id, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.string :description
      t.string :author
      t.datetime :published_at
      t.boolean :read, null: false, default: false

      t.timestamps
    end
    add_index :feed_entries, :entry_id, unique: true
  end
end
