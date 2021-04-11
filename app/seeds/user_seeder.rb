class UserSeeder
  SEEDS_USERS_FILENAME = 'db/seeds/users.csv'.freeze

  def seed
    puts "\nSeeding Users"
    puts "Checking for [#{SEEDS_USERS_FILENAME}]"
    if File.exist?(SEEDS_USERS_FILENAME)
      row_index = 0
      CSV.foreach(SEEDS_USERS_FILENAME, headers: true) do |row|
        row_index += 1
        if UserCredential.exists?(email: row['email_address']) || User.exists?(email_address: row['email_address'])
          puts "Skipping [#{row_index}:#{row['email_address']}] because that email exists"
          next
        end

        seed_row(row_index, row)
      end
    else
      puts "Create the file [#{SEEDS_USERS_FILENAME}] to seed users"
    end
  end

  private

  def seed_row(row_index, row)
    user_credential = UserCredential.new({ email: row['email_address'], password: row['password'], password_confirmation: row['password'] })

    user = User.new({ username: row['username'], email_address: row['email_address'], user_credential: user_credential, state: 'todo', roles: User::ROLES })

    unless user_credential.valid? && user.valid?
      puts "Skipping [#{row_index}:#{row['email_address']}]: the row is invalid:"
      user.errors.each { |error| puts "  User: [#{error.full_message}]" }
      user_credential.errors.each { |error| puts "  UserCredential: [#{error.full_message}]" }
      return
    end

    user_credential.skip_confirmation!

    puts "Seeding UserCredential [#{user_credential.email}]"
    user_credential.user = user
    user.save!
  end
end
