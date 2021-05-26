namespace :graphql do
  desc 'Generate a GraphQL Schema'
  task create_graphql_schema: :environment do
    exit unless Rails.env.development?

    File.write(
      Rails.root.join(NoosphereSchema::SCHEMA_PATH),
      NoosphereSchema.to_definition,
    )
    puts "Updated schema at #{NoosphereSchema::SCHEMA_PATH}"
    `yarn run graphql:updateTypes`
  end
end
