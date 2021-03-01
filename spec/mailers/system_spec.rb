require 'rails_helper'

RSpec.describe SystemMailer, type: :mailer do
  describe 'welcome_email' do
    let(:mail) { described_class.welcome_email }

    it 'matches the subject' do
      expect(mail.subject).to eq('Welcome to the Noösphere')
    end

    it 'is from the SYSTEM_MAILER_DEFAULT_FROM_ADDRESS address' do
      expect(mail.from).to eq([ENV['SYSTEM_MAILER_DEFAULT_FROM_ADDRESS']])
    end

    it 'is to the SYSTEM_MAILER_DEFAULT_RECIPIENT_ADDRESS account' do
      expect(mail.to).to eq([ENV['SYSTEM_MAILER_DEFAULT_RECIPIENT_ADDRESS']])
    end

    it 'renders the non-production warning' do
      expect(mail.body.encoded).to include('Note: non-production account notification.')
    end
  end
end
