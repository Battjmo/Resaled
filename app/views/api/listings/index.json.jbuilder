@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :description, :id, :title, :price, :brand, :price, :size, :user_id, :category
    json.photoUrl url_for(listing.photo) if listing.photo.attached?
  end
end
