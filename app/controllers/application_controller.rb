class ApplicationController < ActionController::Base
  include Pundit
  before_action :fetch_current_user

  protected

  def fetch_current_user
    return setup_public_current_user unless user_credential_signed_in?

    @current_user = current_user_credential.user
  end

  def setup_public_current_user
    @current_user = nil
  end
end
