json.extract! project, :title, :description, :goal, :end_date, :owner_id, :category_id, :id
json.owner_name project.owner.email
json.rewards project.rewards, partial: 'api/rewards/reward', as: :reward
json.image_url asset_path(project.image.url(:original))
