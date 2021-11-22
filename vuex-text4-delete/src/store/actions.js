export default {
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
  addCompany(context, payload){
    console.log(context);
    context.commit('setCompany',payload);
  },
  deleteCompany(context, payload){
    context.commit('deleteCompany', payload);
  }
};
