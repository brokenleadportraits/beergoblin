class AddBreweryToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :brewery, :string
  end
end
