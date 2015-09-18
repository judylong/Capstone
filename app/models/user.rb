class User < ActiveRecord::Base
  validates :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :projects,
    class_name: "Project",
    foreign_key: "owner_id"

  has_attached_file :avatar, styles: { medium: "220x220>", thumb: "160x160>", default_url: "/images/:style/missing.png"}
  validates_attachment_content_type :avatar, content_type: /\Aimage\.*\Z/

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(user_params)
    user = User.find_by_email(user_params[:email])
    user.try(:is_password?, user_params[:password]) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
