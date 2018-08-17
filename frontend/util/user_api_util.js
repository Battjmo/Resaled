export const fetchUser = (id) => (
  $.ajax({
    method: "get",
    url: `/api/users/${id}`
  })
);

// export const updateUser = (user) => (
//   $.ajax({
//     method: "patch",
//     url: `/api/users/${user.id}`,
//     data: {user}
//   })
// );

export const updateUser = (formData) => (
  $.ajax({
    url: `/api/users/${formData.get('user[id]')}`,
    method: "PATCH",
    data: formData,
    contentType: false,
    processData: false
  })
);
