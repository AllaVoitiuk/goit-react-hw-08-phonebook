export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectUser = state => state.user.user;
export const selectUserToken = state => state.user.token;
export const selectIsRefreshing = state => state.user.isRefreshing;