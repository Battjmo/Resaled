json.extract! @listing, :id, :user_id, :title, :price, :size, :brand, :category, :description
json.user do
  json.extract! @listing.user, :username, :id
end
json.photoUrl url_for(@listing.photo) if @listing.photo.attached?
