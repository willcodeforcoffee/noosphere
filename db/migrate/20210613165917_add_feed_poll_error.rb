class AddFeedPollError < ActiveRecord::Migration[6.1]
  def change
    add_column :feeds, :last_poll_error, :jsonb
    add_column :feeds, :last_poll_error_at, :datetime
  end
end
