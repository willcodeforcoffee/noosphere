require 'rails_helper'

RSpec.describe Feed, type: :model do
  describe 'scopes' do
    let(:new_1) { create(:feed, name: 'New Feed') }
    let(:old_1) { create(:feed, :polled_recently, name: 'Recent 1') }
    let(:old_2) { create(:feed, :polled_recently, name: 'Recent 2') }
    let(:due_1) { create(:feed, :due_for_poll, name: 'Due 1') }
    let(:due_2) { create(:feed, :due_for_poll, name: 'Due 2') }
    let(:failed) { create(:feed, :last_poll_failed, name: 'Failed 1') }

    # let() lazy loads so save all to create the elements
    before(:each) do
      [new_1, old_1, old_2, due_1, due_2, failed].each { |feed| feed.save! }
    end

    describe '#unscheduled' do
      subject { Feed.unscheduled }

      it 'should include new Feeds that have never been polled before' do
        expect(Feed.due_for_poll).to include new_1
      end

      it 'should not include the Feeds recently polled' do
        expect(subject).not_to include old_1, old_2, due_1, due_2
      end
    end

    describe '#due_for_poll' do
      subject { Feed.due_for_poll }

      it 'should include new Feeds that have never been polled before' do
        expect(Feed.due_for_poll).to include new_1
      end

      it 'should include both the due Feeds' do
        expect(Feed.due_for_poll).to include due_1, due_2
      end

      it 'should not include the Feeds recently polled' do
        expect(subject).not_to include old_1, old_2
      end

      it 'should not include the Feeds in an error state' do
        expect(subject).not_to include failed
      end
    end
  end
end
