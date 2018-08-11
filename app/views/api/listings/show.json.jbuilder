json.extract! @listing, :id, :title, :price, :brand, :price, :size
json.photoUrl url_for(@listing.photo) if @listing.photo.attached?
