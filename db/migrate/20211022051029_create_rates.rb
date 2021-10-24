class CreateRates < ActiveRecord::Migration[6.1]
  def change
    create_table :rates do |t|
      t.string :serv
      t.string :image
      t.string :description

      t.timestamps
    end
  end
end
