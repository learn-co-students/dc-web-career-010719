class CreateJoinTableSnacksUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :snacks, :users, table_name: :favorites do |t|
      # t.index [:snack_id, :user_id]
      # t.index [:user_id, :snack_id]
    end
  end
end
