require 'rails_helper'

RSpec.describe 'Pages', type: :request do
  describe 'GET /show' do
    let(:test_page) { create(:page, :published) }

    # Ensure the route for the test page is drawn
    before do
      test_page.save!
      Rails.application.reload_routes!
    end

    it 'returns http success' do
      get test_page.url
      expect(response).to have_http_status(:success)
    end
  end
end
