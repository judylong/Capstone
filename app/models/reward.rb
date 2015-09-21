class Reward < ActiveRecord::Base
  belongs_to :project
  has_many :rewardings

  has_many :reward_backers,
      class_name: "User",
      foreign_key: :backer_id,
      through: :rewardings
end
