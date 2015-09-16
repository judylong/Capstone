class Project < ActiveRecord::Base
  # validates :goal, format: { with: /^[0-9]+$/, on: :create}

  belongs_to :owner,
    class_name: "Project",
    foreign_key: "owner_id"

  belongs_to :category

  has_many :rewards
end
