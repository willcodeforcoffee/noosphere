module Types
  class FeedType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :url, String, null: false
    field :polling_interval, Types::Interval, null: true
    field :last_poll_at, GraphQL::Types::ISO8601DateTime, null: true
    field :next_poll_at, GraphQL::Types::ISO8601DateTime, null: true
    field :last_document, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
