require 'rails_helper'

RSpec.describe Communication::Notification::Pushover, type: :model do
  describe 'a new Pushover Notification' do
    context 'with the defaults' do
      let(:notification) { described_class.new }

      it 'status to :ready' do
        expect(notification.status).to eq 'ready'
      end

      it 'is ready?' do
        expect(notification.ready?).to eq true
      end

      it 'is at zero retries' do
        expect(notification.retries.zero?).to eq true
      end

      it 'is not failed?' do
        expect(notification.failed?).to eq false
      end

      it 'will raise an error on #retry_delivery! because it has never been sent' do
        expect { notification.retry_delivery }.to raise_error(AASM::InvalidTransition)
      end
    end
  end
end
