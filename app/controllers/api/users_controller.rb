module Api
  class UsersController < ApiController
    def show
      @user = User.includes(:backed_projects).find(params[:id])
      render :show
    end

    def index
      @users = User.includes(:backed_projects).all
      render :index
    end

    def create
      @user = User.new(user_params)
      if @user.save
        log_in(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: :unprocessable_entity
      end
    end

    protected
    def user_params
      params.require(:user).permit(:email, :password, :email_confirmation, :password_confirmation, :name)
    end
  end
end
