export const initialState = {
  isLoggedIn: false,
  user: localStorage.getItem('token'),
  tickets: [],
  users: [],
}