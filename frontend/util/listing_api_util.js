export const fetchListing = (listingId) => (
  $.ajax({
    method: "get",
    dataType: "json",
    url: `api/listings/${listingId}`
  })
);

export const fetchListings = () => (
  $.ajax({
    method: "get",
    dataType: "json",
    url: `/api/listings/`
  })
);

export const createListing = (formData) => (
  $.ajax({
    url: '/api/listings',
    method: 'POST',
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteListing = (listingId) => (
  $.ajax({
    method: "delete",
    dataType: "json",
    url: `/api/listings/${listingId}`
  })
);

export const updateListing = (listing) => (
  $.ajax({
    method: "patch",
    dataType: "json",
    url: `/api/listings/${listing.id}`,
    data: { listing }
  })
);
