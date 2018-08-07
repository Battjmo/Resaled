export const signUp = (user) => (
    $.ajax({
      method: "post",
      dataType: 'json',
      url: '/api/users',
      data: { user }
    })
);

export const login = (user) => (
  $.ajax ({
    method: "post",
    dataType: "json",
    url: "/api/session",
    data: { user }
  })
);

export const logout = () => (
  $.ajax ({
    method: "delete",
    dataType: "json",
    url: "/api/session"
  })
);
