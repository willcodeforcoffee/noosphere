module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field,
          String,
          null: false,
          description: 'An example field added by the generator'
    def test_field
      'Hello World!'
    end

    field :feeds,
          [::Types::Social::FeedType],
          null: true,
          description: 'Fetch feeds in the system'
    def feeds
      ::Social::Feed.all.map do |feed|
        ::Types::Social::FeedType.from_feed(feed)
      end
    end

    field :feed,
          ::Types::Social::FeedType,
          null: true,
          description: 'Fetch a feed' do
      argument :id, String, required: false, description: 'Feed ID'
    end
    def feed(id:)
      feed = ::Social::Feed.find_by(id: id)
      return nil if feed.blank?

      ::Types::Social::FeedType.from_feed(feed)
    end
  end
end
