class FeedSeeder
  SEEDS_FILENAME = 'db/seeds/feeds.csv'.freeze

  def seed
    puts "\nSeeding Feeds"
    puts "Checking for [#{SEEDS_FILENAME}]"
    if File.exist?(SEEDS_FILENAME)
      row_index = 0
      CSV.foreach(SEEDS_FILENAME, headers: true) do |row|
        row_index += 1

        if row_exists?(row)
          puts "Skipping [#{row_index}:#{row['name']}] because that name or url already exists"
          next
        end

        seed_row(row_index, row)
      end
    else
      puts "Create the file [#{SEEDS_FILENAME}] to seed feeds"
    end
  end

  private

  def row_exists?(row)
    Feed.where(name: row['name']).any? || Feed.where(url: row['url']).any?
  end

  def seed_row(row_index, row)
    feed =
      Feed.new(
        {
          name: row['name'],
          url: row['url'],
          polling_interval:
            ActiveSupport::Duration.parse(row['polling_interval']),
        },
      )

    unless feed.valid?
      puts "Skipping [#{row_index}:#{row['name']}]: the row is not valid:"
      user.errors.each { |error| puts "  User: [#{error.full_message}]" }
      return
    end

    feed.save!
  end
end
