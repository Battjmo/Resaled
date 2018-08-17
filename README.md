# Resaled

[Live site](https://resaled.herokuapp.com/#/)

Resaled is clone of [Grailed](https://www.grailed.com/), a popular menswear
reselling site. Thereon, users can browse, search for, create, edit, and delete
listings for menswear items they wish to buy or sell. They can edit and view
each others profiles as well.

## Ingredients

The app uses the following technologies in its current implementation:

1. A Ruby on Rails Backend, with a smattering of jBuilder and jQuery for database access.

2. A React / Javascript frontend.

3. Amazon S3 and ActiveStorage for image uploading, storage, and retrieval.

4. Heroku hosting.

## Highlights

### Home Page

![index image](https://github.com/Battjmo/GrailedClone/blob/master/app/assets/images/Index.png)

The first thing a user sees on accessing the site is an index page of all the items available on the site. There is also a header at the top of all pages in which the user can create an account or sign in if they already have one. A demo account is available for those who wish to experience the full functionality of the app more quickly.

The index itself is made out of a flex box, which allows it to scale gracefully for multiple screen sizes, including mobile. Scaling this to work on any screen size took a lot of careful CSS work.

---



### Search

The search bar and large category buttons along the top of the index combine to allow users to filter the listings they see in real time. After exploring backend options for implementing this, the most visually interesting and best performing method wound up being to do it entirely on the front end with dynamic filtering:

```Javascript
updateSearch() {
  return (e) => {
  this.setState({searchFilter: e.target.value.toUpperCase()});
  };
}

categoryFilter(category = "") {
  this.setState({categoryFilter: category.toUpperCase()});
    }

  filterByCategory(listings) {
    if (!this.state.categoryFilter) {
      return listings;
    }
    let result = [];
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].category.toUpperCase().includes(this.state.categoryFilter)) {
      result.push(listings[i]);
      }
    }
    return result;
  }

  filterBySearch(listings) {
    if (!this.state.searchFilter) {
      return listings; }
    let result = [];
    for (let i = 0; i < listings.length; i++) {
      if (listings[i].title.toUpperCase().includes(this.state.searchFilter) ||
        listings[i].brand.toUpperCase().includes(this.state.searchFilter) ||
        listings[i].category.toUpperCase().includes(this.state.searchFilter)){
        result.push(listings[i]);
      }
  }
  return result;
}
```

---

### Modals



![modal image](https://github.com/Battjmo/GrailedClone/blob/master/app/assets/images/auth_modal.png)
