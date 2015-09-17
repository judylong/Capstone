json.extract! project, :title, :description, :goal, :end_date, :owner_id, :category_id, :id
json.owner_name project.owner.email
json.rewards project.comments, partial: 'rewards/reward', as: :reward
