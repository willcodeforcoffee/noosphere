require 'rails_helper'

RSpec.describe 'FactoryBots' do
  FactoryBot.factories.map(&:name).each do |factory_name|
    describe "#{factory_name} factory" do
      # rubocop:disable RSpec/MultipleExpectations
      it 'creates a valid object' do
        o = build(factory_name)
        expect(o.errors.full_messages).to eq([])
        expect(o).to be_valid
      end
      # rubocop:enable RSpec/MultipleExpectations
    end
  end
end
