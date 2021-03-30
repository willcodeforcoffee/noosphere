require 'rails_helper'

RSpec.describe 'Social::Homes', type: :request do

  describe 'GET /index' do
    it 'returns http success' do
      get '/social/home/index'
      expect(response).to have_http_status(:success)
    end
  end

end
