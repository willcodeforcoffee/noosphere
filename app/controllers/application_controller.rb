class ApplicationController < ActionController::Base
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  before_action :fetch_current_user

  protected

  def fetch_current_user
    return setup_public_current_user unless user_credential_signed_in?

    @current_user = current_user_credential.user
  end

  def setup_public_current_user
    @current_user = User.public_user
  end

  def current_user
    @current_user || fetch_current_user
  end

  def user_not_authorized
    flash[:error] = 'You do not have permission to view or edit this section'
    redirect_to not_authorized_path
  end
end
