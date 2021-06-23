module Social
  class FeedEntry < ApplicationRecord
    belongs_to :feed
    validates :entry_id, presence: true
    validates :title, presence: true
    validates :url, presence: true

    def self.process_feed_item(feed, feed_item)
      parser = nil
      if Social::FeedEntryParsers::Atom.parses?(feed_item)
        parser = Social::FeedEntryParsers::Atom.new
      elsif Social::FeedEntryParsers::Rss.parses?(feed_item)
        parser = Social::FeedEntryParsers::Rss.new
      else
        logger.error(
          "Unable to parse unknown feed_item type: #{feed_item.class}",
        )
        return false
      end

      parser.parse(feed, feed_item)
    end

    def update_from_feed_item(feed_item)
      self.title = feed_item.title.to_s
      self.url = feed_item.url.to_s
    end
  end
end
