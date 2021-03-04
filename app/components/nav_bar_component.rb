class NavBarComponent < ViewComponent::Base
  def initialize(current_user:)
    super
    @current_user = current_user
    @is_signed_in = !current_user.nil?
  end
end
