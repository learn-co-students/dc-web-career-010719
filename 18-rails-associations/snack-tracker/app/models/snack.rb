class Snack < ApplicationRecord
    belongs_to :retailer, optional: true
end
