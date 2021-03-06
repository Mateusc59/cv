class PagesController < ApplicationController
  def about
  end

  def contact
  end

  def home
  end

  def hidden
    @ways = Way.all

    # the `geocoded` scope filters only flats with coordinates (latitude & longitude)
    @markers = @ways.geocoded.map do |way|
      {
        lat: way.latitude,
        lng: way.longitude
      }
    end
  end
end
