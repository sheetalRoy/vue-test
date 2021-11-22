export default {
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
  setCompany(state, payload){
    console.log('mutations')
    // const a = "vivo"
    state.company.push(payload)
  },
  deleteCompany(state, payload){
    state.company = state.company.filter((item) => {
      console.log(item.name)
      return item.id !== payload;
    })
  }
};
