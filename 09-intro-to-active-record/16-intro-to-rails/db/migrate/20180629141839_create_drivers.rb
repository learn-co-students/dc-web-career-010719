class CreateDrivers < ActiveRecord::Migration[5.2]
  def change
    create_table :drivers do |t|
      t.string :first_name
      t.string :last_name
      t.boolean :hasLicense
      t.integer :birth_year

      t.timestamps
    end
  end
end
