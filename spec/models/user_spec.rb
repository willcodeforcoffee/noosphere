require "rails_helper"

RSpec.describe User, type: :model do
  # validate roles
  context "roles" do
    let(:roles) { [User::ROLES[1]] }
    let(:user) { build(:user, roles: roles) }

    context "for valid role" do
      User::ROLES.each do |role|
        context "for role #{role}" do
          let(:roles) { [role] }

          it "is valid" do
            expect(user).to be_valid
          end
        end
      end
    end

    context "for valid role and an invalid role" do
      User::ROLES.each do |role|
        context "for role #{role}" do
          let(:roles) { [role, "invalid"] }

          it "is valid" do
            expect(user).not_to be_valid
          end
        end
      end
    end

    context "for 'invalid' role" do
      let(:roles) { ["invalid"] }

      it "is valid" do
        expect(user).not_to be_valid
      end
    end
  end
end
