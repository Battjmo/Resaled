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

export const updateListing = (formData) => (
  $.ajax({
    url: `/api/listings/${formData.get('listing[id]')}`,
    method: "PATCH",
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
