module Social
  class AtomFeedEntryParser < BaseFeedEntryParser
    def self.parses?(feed_item)
      feed_item.instance_of?(RSS::Atom::Feed::Entry)
    end

    protected

    def get_feed_entry_id(feed, feed_item)
      "#{feed.id}:ATOM:#{feed_item&.id&.content || feed_item.url}"
    end

    def populate_feed_entry(feed, feed_item, feed_entry)
      feed_entry.update(
        {
          title: feed_item.title&.content,
          url: feed_item.link || feed&.link,
          description: feed_item&.content,
          author: feed_item.author,
          published_at: '',
        },
      )
    end
  end
end
