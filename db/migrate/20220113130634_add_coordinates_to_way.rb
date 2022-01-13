class AddCoordinatesToWay < ActiveRecord::Migration[6.1]
  def change
    add_column :ways, :latitude, :float
    add_column :ways, :longitude, :float
  end
end
