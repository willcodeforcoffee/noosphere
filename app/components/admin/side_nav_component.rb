module Admin
  class SideNavComponent < ViewComponent::Base
  def initialize(current_user:)
    super
    @current_user = current_user
  end
  end
end
