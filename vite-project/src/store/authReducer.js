const initial = {
  user: null,
  token: null,
};

export function authReducer(state = initial, action) {
  switch (action.type) {
    case "auth/setUser":
      return { ...state, user: action.payload };
    case "auth/setToken":
      return { ...state, token: action.payload };
    default:
      return Object.assign({}, state);
  }
}
