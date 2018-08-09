class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.integer :price, null: false
      t.string :size, null: false
      t.string :category, null: false
      t.string :brand, null: false
      t.text :description, null: false

      t.timestamps
    end
    add_index :listings, :title
    add_index :listings, :user_id
    add_index :listings, :price
    add_index :listings, :size
    add_index :listings, :category
    add_index :listings, :brand
  end
end
