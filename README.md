# Resaled

[Live site](https://resaled.herokuapp.com/#/)

Resaled is clone of [Grailed](https://www.grailed.com/), a popular menswear
reselling site. Thereon, users can browse and create listings for menswear items
they wish to buy or sell. They can edit and view each others profiles as well.

## Ingredients

The app uses the following technologies in its current implementation:

1. A Ruby on Rails Backend, with a smattering of jBuilder and jQuery for database access.

2. A React / Javascript frontend.

3. Amazon S3 and ActiveStorage for image uploading, storage, and retrieval.

## How it Works

### Home Page

![index image](https://github.com/Battjmo/GrailedClone/blob/master/app/assets/images/Index.png)

The first thing a user sees on accessing the site is an index page of all the items available on the site. There is also a header at the top of all pages in which the user can create an account or sign in if they already have one. A demo account is available for those who wish to experience the full functionality of the app more quickly.

![modal image](https://github.com/Battjmo/GrailedClone/blob/master/app/assets/images/auth_modal.png)

___

![Listings Image](https://github.com/Battjmo/GrailedClone/blob/master/app/assets/images/listing_show.png)

Clicking any of the listings will take the user to a listing detail page, with all the relevant info for said listings and a larger photo of it. Of course, none of our items are actually for sale, but you may find something interesting if you click the BUY link.

---

![form image]()

Clicking the Sell button in the header, when logged in, will take the user to the create listings form.
