module Api
  class ApiController < ApplicationController
    before_action :require_logged_in!

    def require_logged_in!
      unless logged_in?
        render json: ["must be logged in"], status: :unauthorized
      end
    end
  end
end
