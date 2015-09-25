class Rewarding < ActiveRecord::Base
  validates :backer_id, :reward_id, presence: true
  validates :reward_backer, uniqueness: { scope: :reward }
  validate :check_unique_backer
  validate :rewards_remaining

  belongs_to :reward_backer,
              class_name: "User",
              foreign_key: :backer_id,
              inverse_of: :rewardings

  belongs_to :reward, inverse_of: :rewardings
  has_one :project, through: :reward, source: :project

  def check_unique_backer
    if reward_backer.backed_projects.exists?(project.id)
      errors.add(:backer_id, "user can only back once")
    end
  end

  def rewards_remaining
    if reward.attributes['limited_quantity'] && reward.reward_backers.count + 1 > reward.attributes['limited_quantity']
      errors.add(:reward_id, "no more rewards left")
    end
  end

end
