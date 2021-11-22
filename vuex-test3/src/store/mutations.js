export default {
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
  setCompany(){
    console.log('mutations')
    // const a = "vivo"
    // state.company.push("")
  }
};
