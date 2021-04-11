module Admin
  class BaseController < ApplicationController
    before_action :check_permission

    protected

    def check_permission
      binding.pry
      authorize :admin
    end
  end
end
