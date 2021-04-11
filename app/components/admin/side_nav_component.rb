# frozen_string_literal: true

class Admin::SideNavComponent < ViewComponent::Base
  def initialize(current_user:)
    super
    @current_user = current_user
  end
end
