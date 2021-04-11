module Admin
  class BaseController < ApplicationController
    layout 'admin'
    before_action :check_permission

    protected

    def check_permission
      authorize :admin
    end
  end
end
