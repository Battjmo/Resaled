class Api::ListingsController < ApplicationController

  def new
  end


  def index
    @listings = Listing.all
    render :index
    # render json: @listings.errors.full_messages, status: 422
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  def edit
    @list= Listing.find(params[:id])
    render :edit
  end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      # render :index
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
