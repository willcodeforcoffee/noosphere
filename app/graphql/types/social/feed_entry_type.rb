module Types
  module Social
    class FeedEntryType < Types::BaseObject
      field :id, ID, null: false
      field :feed_id, Integer, null: false
      field :entry_id, String, null: false
      field :title, String, null: false
      field :url, String, null: false
      field :description, String, null: true
      field :author, String, null: true
      field :published_at, GraphQL::Types::ISO8601DateTime, null: true
      field :read, Boolean, null: false
      field :created_at, GraphQL::Types::ISO8601DateTime, null: false
      field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    end
  end
end
