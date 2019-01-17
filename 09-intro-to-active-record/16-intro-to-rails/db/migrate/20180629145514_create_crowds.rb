class CreateCrowds < ActiveRecord::Migration[5.2]
  def change
    create_table :crowds do |t|
      t.integer :size
      t.belongs_to :car, foreign_key: true

      t.timestamps
    end
  end
end
