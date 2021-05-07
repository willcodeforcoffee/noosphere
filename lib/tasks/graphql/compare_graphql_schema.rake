namespace :graphql do
  desc 'Generate a GraphQL Schema'
  task compare_graphql_schema: :environment do
    exit unless Rails.env.development?

    old_definition =
      GraphQL::Schema.from_definition(
        Rails.root.join(NoosphereSchema::SCHEMA_PATH).to_s,
      ).to_definition
    comparison_result =
      GraphQL::SchemaComparator.compare(
        old_definition,
        NoosphereSchema.to_definition,
      )

    if comparison_result.changes.empty?
      puts 'No schema changes are found'
      exit 0
    end

    puts 'Schema changes found.'
    exit 1
  end
end
