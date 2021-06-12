# FeedPollWorker actually polls the Feed, they're scheduled by FeedPollScheduleWorker
class FeedPollWorker
  include Sidekiq::Worker

  def perform(feed_id)
    feed = Feed.find_by(id: feed_id)

    if feed.blank?
      logger.error("Feed with id [#{feed_id}] scheduled but not found")
      return
    end

    # TODO: Scan for an RSS feed
    feed.poll
  end
end
