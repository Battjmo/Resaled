json.extract! @user, :id, :username, :email

@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id, :title, :price, :brand, :price, :size, :user_id
    json.photoUrl url_for(listing.photo) if listing.photo.attached?
  end
end

# json.photoUrl url_for(user.photo)
