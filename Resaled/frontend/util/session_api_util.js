export const signup = (user) => (
    $.ajax({
      method: "post",
      dataType: 'json',
      url: '/api/users',
      data: { user }
    })
);

export const signin = (user) => (
  $.ajax ({
    method: "post",
    dataType: "json",
    url: "/api/session",
    data: { user }
  })
);

export const signout = () => (
  $.ajax ({
    method: "delete",
    dataType: "json",
    url: "/api/session"
  })
);
