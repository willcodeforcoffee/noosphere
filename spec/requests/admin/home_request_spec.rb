require 'rails_helper'

RSpec.describe 'Admin::Homes', type: :request do
  describe 'GET /index' do
    context 'when not logged in' do
      it 'redirects to not_authorized_path' do
        get admin_home_index_path
        expect(response).to redirect_to(not_authorized_path)
      end
    end

    context 'when logged in as an admin' do
      let(:user) { create(:user, :admin) }

      # before(:each) do
      #   # get admin_path
      # end

      it 'returns http success' do
        sign_in user.user_credential
        get admin_home_index_path
        expect(response).to have_http_status(:success)
      end
    end
  end
end
