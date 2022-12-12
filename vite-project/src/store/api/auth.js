import { api } from "../../configs/api";

export function fetchUserById(userId) {
  return async function fetchTodoByIdThunk(dispatch) {
    // store dispatch
    const response = await api.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    dispatch({
      type: "auth/setUser",
      payload: response,
    });
  };
}
