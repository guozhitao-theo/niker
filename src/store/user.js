// 用户数据存储
const user = {
  namespaced: true,
  state: {
    userInfor: ''
  },
  mutations: {
    createUserInfor (state, data) {
      state.userInfor = data
    }
  }
}
export default user
