class CreatePages < ActiveRecord::Migration[6.1]
  def change
    create_table :pages do |t|
      t.string :url, limit: 255, null: false
      t.string :title, null: false
      t.string :description
      t.datetime :published_at

      t.timestamps
    end
    add_index :pages, :url, unique: true
    add_index :pages, :published_at
  end
end
