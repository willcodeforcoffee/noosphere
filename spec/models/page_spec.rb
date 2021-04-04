require "rails_helper"

RSpec.describe Page, type: :model do
  # TODO published scope test
  context "scope" do
    context "published->" do
      let(:unpublished_1) do
        create(:page, title: "Unpublished 1", url: "unpublished/1")
      end
      let(:unpublished_2) do
        create(:page, title: "Unpublished 2", url: "unpublished/2")
      end
      let(:published_1) do
        create(:page, :published, title: "Published 1", url: "published/1")
      end

      # This will pre-load these items for the tests, otherwise they aren't
      # created until requested
      before(:each) do
        preload_all_lets = [unpublished_1, unpublished_2, published_1]
      end

      it "should only have the published element" do
        expect(Page.published.to_a).to eq([published_1])
      end
    end
  end
end
