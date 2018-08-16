json.extract! listing, :id,
:title, :price, :brand, :price, :size, :description
json.photoUrl url_for(listing.photo)
