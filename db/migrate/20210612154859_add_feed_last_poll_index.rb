class AddFeedLastPollIndex < ActiveRecord::Migration[6.1]
  def change
    add_index :feeds, :next_poll_at
  end
end
