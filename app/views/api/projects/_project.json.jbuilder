json.extract! project, :title, :description, :goal, :end_date, :owner_id, :category_id, :id
json.owner_name project.owner.email
json.rewards project.rewards, partial: 'api/rewards/reward', as: :reward
json.image_url asset_path(project.image.url(:original))
json.num_project_backers project.project_backers.length
json.amt_funded project.project_backed_rewards.sum(:pledge_amount)
json.time_left (project.end_date - Time.now) > 0 ? ((project.end_date - Time.now)/86400).to_i : 0
