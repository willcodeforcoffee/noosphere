class PagesController < ApplicationController
  def show
    @page = Page.published.where(url: request.path).first

    return render text: 'Not Found', status: :not_found if @page.blank?
  end
end
