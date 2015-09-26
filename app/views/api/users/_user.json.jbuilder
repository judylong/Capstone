json.extract! user, :email, :id, :name
json.backed_projects user.backed_projects, partial: 'api/projects/project', as: :project
json.num_backed_projects user.backed_projects.count
json.created_projects user.projects, partial: 'api/projects/project', as: :project
json.num_created_projects user.projects.count
