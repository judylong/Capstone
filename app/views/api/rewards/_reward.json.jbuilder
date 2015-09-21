json.extract! reward, :id,
                      :project_id,
                      :description,
                      :pledge_amount,
                      :limited_quantity,
                      :shipping_location,
                      :estimated_delivery
json.num_reward_backers reward.reward_backers.length
