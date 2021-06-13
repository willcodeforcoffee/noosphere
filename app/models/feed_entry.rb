class FeedEntry < ApplicationRecord
  belongs_to :feed
  validates :entry_id, presence: true
  validates :title, presence: true
  validates :url, presence: true

  def self.process_feed_item(feed_item)
    item_id = feed_item.id&.content || feed_item.url
    feed_entry = FeedEntry.find_by(entry_id: item_id, read: false)
    if feed_entry.present?
      # update changes
      feed_entry.update_from_feed_item(feed_item)
    else
      # create new FeedEntry
      feed_entry = FeedEntry.new({ entry_id: item_id })
    end

    feed_entry
  end

  def update_from_feed_item(feed_item)
    self.title = feed_item.title.to_s
    self.url = feed_item.url.to_s
  end
end
