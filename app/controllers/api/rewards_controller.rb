module Api
  class RewardsController < ApiController
    def create
      @reward = Reward.new(reward_params).includes(:reward_backers, :rewardings)
      if @reward.save
        render :show
      else
        render json: @reward.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @reward = Reward.includes(:reward_backers, :rewardings).find(params[:id])
      render :show
    end

    private
    def reward_params
      params.require(:reward).permit(:project_id,
                                    :description,
                                    :pledge_amount,
                                    :limited_quantity,
                                    :shipping_location,
                                    :estimated_delivery)
    end
  end

end
