json.extract! @listing, :id, :user_id, :title, :price, :size, :brand, :category, :description

json.photoUrl url_for(@listing.photo) if @listing.photo.attached?
