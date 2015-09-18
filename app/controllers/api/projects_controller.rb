module Api
  class ProjectsController < ApiController
    wrap_parameters false
    def index
      @projects = Project.all
      render :index
    end

    def create
      @project = current_user.projects.new(project_params)
      if @project.save
        render json: @project
      else
        render json: @project.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @project = Project.find(params[:id])
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
  end
end
