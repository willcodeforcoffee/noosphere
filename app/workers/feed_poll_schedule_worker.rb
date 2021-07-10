class FeedPollScheduleWorker
  include Sidekiq::Worker

  def perform()
    ::Social::Feed.due_for_poll.each do |feed|
      FeedPollWorker.perform_async(feed.id)
    end
  end
end
