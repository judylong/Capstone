module Api
  class StaticPagesController < ApiController
    def search
      @search_results = PgSearch
        .multisearch(params[:query])
        .includes(:searchable)
        .page(params[:page])

      render :search
    end

    def search_category
      @search_results = Project
        .search_by_category(params[:query])
        .page(params[:page])
      render :search_category
    end

  end
end
