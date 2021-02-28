# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts 'Invoking Database seed'
SEEDS_USERS_FILENAME = 'db/seeds/users.csv'.freeze

puts "Checking for [#{SEEDS_USERS_FILENAME}]"
if File.exist?(SEEDS_USERS_FILENAME)
  row_index = 0
  CSV.foreach(SEEDS_USERS_FILENAME, headers: true) do |row|
    row_index += 1
    if UserCredential.exists?(email: row['email_address']) || User.exists?(email_address: row['email_address'])
      puts "Skipping [#{row_index}:#{row['email_address']}] because that email exists"
      next
    end

    user_credential = UserCredential.new({
                                           email: row['email_address'],
                                           password: row['password'],
                                           password_confirmation: row['password'],
                                         })

    user = User.new({
      username: row['username'],
      email_address: row['email_address'],
      user_credential: user_credential,
      state: 'todo',
    })

    unless user_credential.valid? && user.valid?
      puts "Skipping [#{row_index}:#{row['email_address']}]: the row is invalid:"
      user.errors.each do |error|
        puts "  User: [#{error.full_message}]"
      end
      user_credential.errors.each do |error|
        puts "  UserCredential: [#{error.full_message}]"
      end
      next
    end

    user_credential.skip_confirmation!

    puts "Seeding UserCredential [#{user_credential.email}]"
    user_credential.user = user
    user.save!
  end
else
  puts "Create the file [#{SEEDS_USERS_FILENAME}] to seed users"
end

puts 'Database seed complete'
