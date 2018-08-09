class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
  end

  def create
    @listing = Listing.find(params[:id])
  end


  private

  def listing_params
    params.require(:listing).permit(:user_id, :title, :price, :size, :category, :brand, :description)
  end

  #END OF CLASS
end
