//  功能模块的vuex
let module = {
  namespaced: true,
  state: {
    tabIndex: 1,
    moduleData: [{
      id: 1,
      name: '账户管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: ''
    }, {
      id: 2,
      name: '产品管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: ''
    }, {
      id: 3,
      name: '信息管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: ''
    }, {
      id: 4,
      name: '资金管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: ''
    }, {
      id: 5,
      name: '账户管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: ''
    }],
    chooseModule: {}
  },
  mutations: {
    changeTabIndex (state, data) {
      state.tabIndex = data
    },
    addChooseModule (state, data) {
      state.chooseModule[data.id] = data
    },
    deletechooseModule (state, data) {
      delete state.chooseModule[data.id]
    }
  }
}
export default module
