class Reward < ActiveRecord::Base
  SHIPPING = ["No shipping involved", "Only ships to certain countries", "Ships anywhere in the world"]

  belongs_to :project
  has_many :rewardings

  has_many :reward_backers,
      class_name: "User",
      foreign_key: :backer_id,
      through: :rewardings
end
