json.extract! user, :email, :id
json.backed_projects user.backed_projects, partial: 'api/projects/project', as: :project
