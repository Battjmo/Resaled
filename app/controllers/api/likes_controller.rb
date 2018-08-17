class LikesController < ApplicationController

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.listing_id = params[:id]
    render json: @like.errors.full_messages, status: 422 unless @like.save
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
  end

  
end
