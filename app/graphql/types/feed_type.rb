module Types
  class FeedType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :description, String, null: true
    field :tags, [String], null: true
    field :url, String, null: false
    field :polling_interval, Types::Interval, null: true
    field :last_poll_at, GraphQL::Types::ISO8601DateTime, null: true
    field :next_poll_at, GraphQL::Types::ISO8601DateTime, null: true
    field :last_document, String, null: true
    field :last_poll_error_at, GraphQL::Types::ISO8601DateTime, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def self.from_feed(feed)
      {
        id: feed.id,
        name: feed.name_override || feed.name,
        url: feed.url,
        description: feed.description,
        tags: feed.tags,
        polling_interval: feed.polling_interval,
        last_poll_at: feed.last_poll_at,
        next_poll_at: feed.next_poll_at,
        last_document: feed.last_document,
        created_at: feed.created_at,
        updated_at: feed.updated_at,
      }
    end
  end
end
