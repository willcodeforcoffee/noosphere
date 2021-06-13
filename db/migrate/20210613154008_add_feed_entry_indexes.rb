class AddFeedEntryIndexes < ActiveRecord::Migration[6.1]
  def change
    add_index :feed_entries, :published_at
    add_index :feed_entries, :read
  end
end
