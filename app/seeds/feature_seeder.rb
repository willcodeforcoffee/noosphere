class FeatureSeeder
  def seed
    puts "\nSeeding Features"
    [{ name: 'registration', enabled: false }].each do |seed|
      if Feature.find_by(name: seed[:name]).present?
        puts "Feature [#{seed[:name]}] exists"
        next
      end

      puts "Seeding Feature [#{seed[:name]}]"
      Feature.new(seed).save!
    end
  end
end
