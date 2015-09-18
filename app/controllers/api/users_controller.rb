module Api
  class UsersController < ApiController
    def show
      @user = User.find(params[:id])
      render :show
    end

    def index
      @users = User.all
      render :index
    end

    def create
      @user = User.find(params[:id])
      if @user.save
        log_in(user)
      else
        render json: @user.errors.full_messages, status: unprocessable_entity
      end
    end

    protected
    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
