json.extract! @user, :id, :username, :email, :country, :height, :weight
json.photoUrl url_for(@user.photo) if @user.photo.attached?
