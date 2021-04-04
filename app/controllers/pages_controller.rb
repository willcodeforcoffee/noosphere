class PagesController < ApplicationController
  def show
    binding.pry
    @page = Page.find_by(url: request.path)
  end
end
