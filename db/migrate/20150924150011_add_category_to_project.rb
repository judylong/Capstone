class AddCategoryToProject < ActiveRecord::Migration
  def change
    drop_table :categories
    remove_column :projects, :category_id
    add_column :projects, :category, :string, null: false
  end
end
