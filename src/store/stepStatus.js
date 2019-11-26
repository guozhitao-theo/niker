// 步骤条步骤
const stepStatus = {
  namespaced: true,
  state: {
    stepBar: 1
  },
  mutations: {
    changeStep (state, data) {
      state.stepBar = data
    }
  }
}
export default stepStatus
