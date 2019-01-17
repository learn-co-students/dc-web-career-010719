class AddAgeToDrivers < ActiveRecord::Migration[5.2]
  def change
    add_column :drivers, :age, :integer
  end
end
