class FeedPollScheduleWorker
  include Sidekiq::Worker

  def perform()
    Feed.due_for_poll.each { |feed| FeedPollWorker.perform_async(feed.id) }
  end
end
