class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer "project_id", null: false
      t.text "description", null: false
      t.integer "pledge_amount", null: false
      t.integer "limited_quantity"
      t.string "shipping_location"
      t.date "estimated_delivery", null: false
      t.timestamps null: false
    end
  end
end
