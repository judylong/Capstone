class Rewarding < ActiveRecord::Base
  validates :backer_id, :reward_id, presence: true
  validates :reward_backer, uniqueness: { scope: :reward }
  validate :check_unique_backer

  belongs_to :reward_backer,
              class_name: "User",
              foreign_key: :backer_id,
              inverse_of: :rewardings

  belongs_to :reward, inverse_of: :rewardings
  has_one :project, through: :reward, source: :project

  def check_unique_backer
    if reward_backer.backed_projects.exists?(project.id)
      errors.add(:backer_id, "user can only back once00")
    end

  end
end
