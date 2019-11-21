const user = {
  namespaced: true,
  state: {
    userInfor: '565'
  },
  mutations: {
    createUserInfor (state, data) {
      state.userInfor = data
    }
  }
}
export default user
