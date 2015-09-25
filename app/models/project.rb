class Project < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:description, :full_description, :title]
  pg_search_scope :search_by_category, :against => :category
  # validates :goal, format: { with: /^[0-9]+$/, on: :create}

  CATEGORIES = ["Home Security", "Art", "Odd Services", "Enemy Capture", "World Domination", "Journalism", "Film & Video"];

  validates :full_description,
            :title,
            :description,
            :goal,
            :end_date,
            :owner_id,
            :category,
            presence: true

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :owner,
    class_name: "User",
    foreign_key: "owner_id"

  has_many :rewards

  has_many :project_backers, through: :rewards, source: :reward_backers

end
