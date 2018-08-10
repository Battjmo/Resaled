export const fetchListing = listingId => (
  $.ajax({
    method: "get",
    url: `api/listings/${listingId}`
  })
);

export const fetchListings = () => (
  $.ajax({
    method: "get",
    url: `api/listings/`
  })
);

export const createListing = listing => (
  $.ajax({
    method: "post",
      url: `api/listings/`,
    data: { listing }
  })
);

export const deleteListing = listingId => (
  $.ajax({
    method: "delete",
    url: `api/listings/${listingId}`
  })
);

export const updateListing = listing => (
  $.ajax({
    method: "patch",
    url: `api/listings/${listing.id}`,
    data: { listing }
  })
);
