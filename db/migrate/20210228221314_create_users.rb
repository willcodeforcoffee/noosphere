class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, limit: 30
      t.string :email_address, null: false
      t.string :state, null: false, limit: 25
      t.references :user_credential, null: false, foreign_key: true

      t.timestamps
    end
    add_index :users, :username, unique: true
  end
end
