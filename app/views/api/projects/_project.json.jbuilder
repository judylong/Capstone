json.extract! project, :title, :description, :full_description, :goal, :owner_id, :category, :id
json.end_date project.end_date.strftime('%a, %b %d %Y %I:%M %p')
json.owner_name project.owner_name
json.owner_email project.owner.email
json.rewards project.rewards, partial: 'api/rewards/reward', as: :reward
json.image_url asset_path(project.image.url(:original))
json.num_project_backers project.project_backers.length
json.amt_funded project.project_backers.sum(:pledge_amount)
json.time_left (project.end_date - Time.now) > 0 ? ((project.end_date - Time.now)/86400).to_i : 0
