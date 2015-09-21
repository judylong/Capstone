class Rewarding < ActiveRecord::Base
  validates :backer_id, :reward_id, presence: true
  validates :reward_backer, uniqueness: { scope: :reward }
  belongs_to :reward_backer,
              class_name: "User",
              foreign_key: :backer_id,
              inverse_of: :rewardings

  belongs_to :reward, inverse_of: :rewardings
end
