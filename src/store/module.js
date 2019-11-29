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
      showname: '账户管理',
      icon: 'el-icon-s-goods',
      path: '/account'
    }, {
      id: 2,
      name: '产品管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: '产品管理',
      icon: 'el-icon-box',
      path: '/product'
    }, {
      id: 3,
      name: '信息管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: '信息管理',
      icon: 'el-icon-chat-dot-round',
      path: '/information'
    }, {
      id: 4,
      name: '资金管理',
      descript: '账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述账户管理描述',
      checked: false,
      showname: '资金管理',
      icon: 'el-icon-money',
      path: '/money'
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
    },
    changeChooseModule (state, data) {
      state.chooseModule = data
    }
  }
}
export default module
