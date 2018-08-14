class Api::ListingsController < ApplicationController

  def new
  end


  def index
    @listings = Listing.all
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def edit
    @listing = Listing.find(params[:id])
  end

  def update
    @listing = Listing.find(params[:id])
    if @listing.update(listing_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    @listing.destroy
    render :show

  end


  private

  def listing_params
    params.require(:listing).permit(:user_id, :title, :price, :size, :category, :brand, :description, :photo)
  end

  #END OF CLASS
end
