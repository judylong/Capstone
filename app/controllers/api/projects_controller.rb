module Api
  class ProjectsController < ApiController
    wrap_parameters false
    def index
      @projects = Project.includes(:rewards, :owner, :project_backed_rewards).all
      render :index
    end

    def create
      @project = current_user.projects.new(project_params)
      rewards_params[:rewards].each do |reward_params|
        @project.rewards.new(reward_params)
      end

      if @project.save
        render :show
      else
        render json: @project.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @project = Project.includes(:project_backers, :project_backers, :project_backed_rewards).find(params[:id])
      render :show
    end

    private
    def project_params
      params.require(:project).permit(:title,
                                      :description,
                                      :goal,
                                      :end_date,
                                      :owner_id,
                                      :category_id,
                                      :image)
    end

    def rewards_params
      params.require(:project).permit(:rewards => [:project_id,
                    :description,
                    :pledge_amount,
                    :limited_quantity,
                    :shipping_location,
                    :estimated_delivery])
    end
  end
end
