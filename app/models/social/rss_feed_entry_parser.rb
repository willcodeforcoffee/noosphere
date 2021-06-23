module Social
  class RssFeedEntryParser < BaseFeedEntryParser
    def self.parses?(feed_item)
      feed_item.instance_of?(RSS::Rss::Channel::Item)
    end

    protected

    def get_feed_entry_id(feed, feed_item)
      sub_id =
        feed_item.link ||
          Digest::SHA2.hexdigest(feed_item.title || feed_item.description)

      "#{feed.id}$RSS$#{sub_id}"
    end

    def populate_feed_entry(feed, feed_item, feed_entry)
      feed_entry.update(
        {
          title: feed_item.title,
          url: feed_item.link || feed.url,
          description: feed_item.description,
          author: feed_item.author,
          published_at: '',
        },
      )
    end
  end
end
