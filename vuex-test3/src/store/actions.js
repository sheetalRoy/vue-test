export default {
  login(context) {
    context.commit('setAuth', { isAuth: true });
  },
  logout(context) {
    context.commit('setAuth', { isAuth: false });
  },
  addCompany(context){
    console.log('click');
    console.log(context);
    context.commit('setCompany');
  }
};
