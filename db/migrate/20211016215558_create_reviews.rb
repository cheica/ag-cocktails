class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :rev_name
      t.string :comment
      t.integer :rating

      t.timestamps
    end
  end
end
