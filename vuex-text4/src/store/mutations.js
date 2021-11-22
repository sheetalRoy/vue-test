export default {
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
  setCompany(state, payload){
    console.log('mutations')
    // const a = "vivo"
    state.company.push(payload)
  }
};
