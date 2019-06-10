const routers = [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld.vue'], resolve)
  },
  {
    path: '/home',
    name: 'index',
    component: resolve => require(['../pages/setting/index.vue'], resolve),
    children: [
      {
        path: '/home/index',
        name: 'HomePage',
        meta:'首页',
        component: resolve => require(['../pages/setting/HomePage.vue'], resolve)
      },
      {
        path: '/home/addsetting',
        name: 'addsetting',
        meta:'企业采集配置',
        component: resolve => require(['../pages/setting/addsetting.vue'], resolve)
      },
      {
        path: '/home/addCompany',
        name: 'addCompany',
        component: resolve => require(['../pages/setting/addCompany.vue'], resolve)
      },
      {
        path: '/home/Cost',
        name: 'Cost',
        component: resolve => require(['../pages/setting/Cost.vue'], resolve)
      },
      {
        path: '/home/plat',
        name: 'plat',
        component: resolve => require(['../pages/platform/index.vue'], resolve)
      },
      {
        path: '/home/user',
        name: 'user',
        component: resolve => require(['../pages/setting/user.vue'], resolve)
      },
      {
        path: '/home/search',
        name: 'search',
        component: resolve => require(['../pages/setting/search.vue'], resolve)
      },
      {
        path: '/home/personalSetting',
        name: 'personalSetting',
        component: resolve => require(['../pages/setting/personalSetting.vue'], resolve)
      },
      {
        path: '/home/personal',
        name: 'personal',
        component: resolve => require(['../pages/personal/index.vue'], resolve)
      },
      {
        path: '/home/personalList',
        name: 'personalList',
        component: resolve => require(['../pages/personal/personalList'], resolve)
      },
      {
        path: '/home/CostAdmin',
        name: 'CostAdmin',
        component: resolve => require(['../pages/setting/CostAdmin'], resolve)
      }
    ]
  },
  // {
  //   path: '/plat',
  //   name: 'plat',
  //   component: resolve => require(['../pages/platform/index.vue'], resolve)
  // },
  {
    path: '/',
    name: 'login',
    component: resolve => require(['../pages/platform/login.vue'], resolve)
  },


]


export default routers
