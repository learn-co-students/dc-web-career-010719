class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
    has_many :favorites
    has_many :users, through: :favorites
    validates :name, uniqueness: true, presence: true
    validates :calories, presence: true
    validates :deliciousness, presence: true
end
