module Social
  class BaseFeedEntryParser
    def self.parses?(feed_item); end

    def parse(feed, feed_item)
      item_id = get_feed_entry_id(feed, feed_item)
      feed_entry =
        FeedEntry.find_by(entry_id: item_id) ||
          FeedEntry.new({ feed_id: feed.id, entry_id: item_id, read: false })

      populate_feed_entry(feed, feed_item, feed_entry)

      feed_entry
    end

    protected

    def get_feed_entry_id(feed, feed_item); end
    def populate_feed_entry(feed, feed_item, feed_entry); end
  end
end
