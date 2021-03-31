require "rails_helper"

RSpec.describe Feature, type: :model do
  context "when creating a new Feature" do
    it "should not be enabled" do
      expect(subject.enabled).to eq false
    end

    it "should not be enabled" do
      expect(subject.enabled?).to be false
    end
  end

  context "enable!" do
    let(:test_feature) { create(:feature, enabled: false) }

    it "should change enabled" do
      expect { test_feature.enable! }.to change { test_feature.enabled }
    end

    it "should set enabled 'true'" do
      test_feature.enable!
      expect(test_feature.enabled).to be true
    end
  end

  context "disable!" do
    let(:test_feature) { create(:feature, enabled: true) }

    it "should change enabled" do
      expect { test_feature.disable! }.to change { test_feature.enabled }
    end

    it "should set enabled 'false'" do
      test_feature.disable!
      expect(test_feature.enabled).to be false
    end
  end
end
