let staticRoutes = [
  {
    name: '首页',
    component: () => import('main/index.vue')
  },
  {
    name: '账户管理',
    component: () => import('main/account.vue')
  },
  {
    name: '产品管理',
    component: () => import('main/product.vue')
  },
  {
    name: '资金管理',
    component: () => import('main/money.vue')
  },
  {
    name: '信息管理',
    component: () => import('main/Information.vue')
  }
]
export default staticRoutes
