require "rails_helper"

RSpec.describe ApplicationHelper, type: :helper do
  describe "#feature_enabled?(feature_name)" do
    context "when the Feature does not exist" do
      it "should raise the FeatureNotFoundError" do
        expect { helper.feature_enabled?("feature_that_does_not_exist") }.to raise_error(Feature::FeatureNotFoundError)
      end
    end

    context "when the Feature is enabled" do
      let(:feature) { create(:feature, name: "TestFeature", enabled: true) }

      it "should return true" do
        expect(helper.feature_enabled?(feature.name)).to be true
      end

      context "when the Feature is disabled" do
        let(:feature) { create(:feature, name: "TestFeature", enabled: false) }

        it "should return true" do
          expect(helper.feature_enabled?(feature.name)).to be false
        end
      end
    end
  end
end
