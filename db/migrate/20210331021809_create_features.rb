class CreateFeatures < ActiveRecord::Migration[6.1]
  def change
    create_table :features do |t|
      t.string :name, limit: 30
      t.boolean :enabled, default: false

      t.timestamps
    end
    add_index :features, :name, unique: true
  end
end
