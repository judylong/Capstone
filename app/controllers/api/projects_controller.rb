class ProjectsController < ApplicationController
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
    render json: @project
  end

  private
  def project_params
    params.require(:project).permit(:title,
                                    :description,
                                    :goal,
                                    :end_date,
                                    :owner_id,
                                    :category_id)
  end
end
