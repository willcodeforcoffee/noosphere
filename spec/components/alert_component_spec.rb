require 'rails_helper'

RSpec.describe AlertComponent, type: :component do
  describe 'ctor validation' do
    context 'when level is not valid' do
      it 'throws an InvalidLevel exception' do
        expect { described_class.new(level: :broken, message: 'Broken') }.to raise_error(AlertComponent::InvalidLevelError)
      end
    end
  end

  # it "renders something useful" do
  #   expect(
  #     render_inline(described_class.new(attr: "value")) { "Hello, components!" }.css("p").to_html
  #   ).to include(
  #     "Hello, components!"
  #   )
  # end
end
