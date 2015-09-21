class CreateRewardings < ActiveRecord::Migration
  def change
    create_table :rewardings do |t|
      t.integer :backer_id, null: false
      t.integer :reward_id, null: false
      t.timestamps null: false
    end
  end
end
