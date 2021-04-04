require 'rails_helper'

RSpec.describe "Pages", type: :request do
  describe "GET /show" do
    it "returns http success" do
      get "/pages/show"
      expect(response).to have_http_status(:success)
    end
  end

end
