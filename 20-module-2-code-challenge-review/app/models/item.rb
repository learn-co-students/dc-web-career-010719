class Item < ApplicationRecord
  has_many :orders
  validates :name, presence: true, uniqueness: true
  validates :price, presence: true, numericality: {greater_than: 0}
end
