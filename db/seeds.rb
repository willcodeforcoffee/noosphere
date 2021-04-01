# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
puts "Invoking Database seed"
FeatureSeeder.new.seed
UserSeeder.new.seed

puts "Database seed complete"
