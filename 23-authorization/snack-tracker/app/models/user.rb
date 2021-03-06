class User < ApplicationRecord
    has_secure_password
    has_many :favorites
    has_many :snacks, through: :favorites
    validates :username, uniqueness: true
end
