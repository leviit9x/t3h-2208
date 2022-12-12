const initial = {
  user: null,
  token: null,
  date: null,
  address: null,
};

// pure function, nhan vao cùng 1 giá trị và trả ra cùng 1 kết quả, không side effect.

export function authReducer(state = initial, action) {
  switch (action.type) {
    case "auth/setUser":
      return { ...state, user: action.payload };
    case "auth/setToken":
      return { ...state, token: action.payload };
    case "auth/setAddress":
      return { ...state, address: action.payload };
    case "auth/setDate":
      return { ...state, date: action.payload };
    default:
      return Object.assign({}, state);
  }
}
