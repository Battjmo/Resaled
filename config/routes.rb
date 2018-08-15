Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :edit, :update]
    resource :session, only: [:create, :destroy]
    resources :listings
  end
  root "static_pages#root"
end
