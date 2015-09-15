class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :goal, null: false
      t.datetime :end_date, null: false
      t.integer :owner_id, null: false
      t.integer :category_id, null: false

      t.timestamps null: false
    end

    add_index :projects, :end_date
    add_index :projects, :goal
  end
end
