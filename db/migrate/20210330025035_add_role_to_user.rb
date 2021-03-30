class AddRoleToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :roles, :string, array: true
  end
end
