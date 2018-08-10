class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render json: @listings
    # render json: @listings.errors.full_messages, status: 422
  end

  # def show
  #   @listing = Listing.find(params[:id])
  #   render json: @listing
  # end
  #
  # def create
  #   @listing = Listing.find(params[:id])
  # end


  private

  def listing_params
    params.require(:listing).permit(:user_id, :title, :price, :size, :category, :brand, :description)
  end

  #END OF CLASS
end
