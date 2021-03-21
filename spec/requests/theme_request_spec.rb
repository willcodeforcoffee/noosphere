require 'rails_helper'

RSpec.describe 'Themes', type: :request do

  describe 'GET /index' do
    it 'returns http success' do
      get '/theme/index'
      expect(response).to have_http_status(:success)
    end
  end

end
