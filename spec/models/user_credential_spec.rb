require 'rails_helper'

RSpec.describe UserCredential, type: :model do
  describe 'create one' do
    let(:user_credential) { create(:user_credential) }

    it 'is valid' do
      expect(user_credential).to be_valid
    end
  end
end
