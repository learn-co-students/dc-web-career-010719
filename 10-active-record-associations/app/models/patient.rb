class Patient < ActiveRecord::Base

    belongs_to :doctor
    # belongs_to :hospital, through: doctor
    delegate :hospital, :to => :doctor
end
