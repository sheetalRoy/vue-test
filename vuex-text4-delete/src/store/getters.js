export default {
  userIsAuthenticated(state) {
    return state.isLoggedIn;
  },
  totalCompany(state){
    const count = state.company.length;
    return count;
  }
};