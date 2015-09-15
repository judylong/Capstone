class Project < ActiveRecord::Base
  belongs_to :owner,
    class_name: "Project",
    foreign_key: "owner_id"

  belongs_to :category

  has_many :rewards
end
