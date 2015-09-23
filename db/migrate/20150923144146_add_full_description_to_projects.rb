class AddFullDescriptionToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :full_description, :text, null: false
  end
end
