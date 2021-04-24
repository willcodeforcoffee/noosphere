module Admin
  class PagesController < Admin::BaseController
    def index
      @pages = Page.all
    end

    def new
      @page = Page.new
    end

    def create
      @page = Page.new(page_params)
      if @page.save
        redirect_to admin_pages_path
      else
        flash[:error] = 'The form is not valid'
        render 'new'
      end
    end

    def destroy; end

    private

    def page_params
      params.require(:page).permit(:url, :title, :description, :published_at)
    end
  end
end
