require 'rails_helper'

RSpec.describe 'Homes', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/home/index'
      expect(response).to have_http_status(:success)
    end

    context 'when logged in as an admin' do
      let(:user) { create(:user) }

      before do
        sign_in user.user_credential

        # Get root to clear out the response after the sign_in
        get root_path
      end

      it 'returns http success' do
        get '/'
        expect(response).to have_http_status(:success)
      end
    end
  end
end
