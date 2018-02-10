class CreateMenuLists < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_lists do |t|
      t.date :date
      t.string :name
      t.boolean :isPresent
      t.integer :price

      t.timestamps
    end
  end
end
