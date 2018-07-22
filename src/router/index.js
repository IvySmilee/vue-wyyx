import Vue from 'vue'
import Router from 'vue-router'

/*路由组件懒加载：打包时进行代码分割：只有当需要时从后台获取*/
const  InitLayer=()=>import('../pages/InitLayer/InitLayer.vue');
const  Msite=()=>import('../pages/Msite/Msite.vue');
const  Shiwu=()=>import('../pages/Shiwu/Shiwu.vue');
const  Cart=()=>import('../pages/Cart/Cart.vue');
const  Sort=()=>import('../pages/Sort/Sort.vue');
const  Profile=()=>import('../pages/Profile/Profile.vue');
const  SortDetail=()=>import('../components/Sort/SortDetail/SortDetail.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/init',
      component: InitLayer,
    },
    {
      path: '/msite',
      component: Msite,
      meta:{//配置：用来控制footerguide什么时候显示
        isShow:true
      }
    },
    {
      path: '/shiwu',
      component: Shiwu,
      meta:{
        isShow:true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta:{
        isShow:true
      }
    },
    {
      path: '/sort',
      component: Sort,
      meta:{
        isShow:true
      },
      children:[
        {
          path: 'detail',
          component: SortDetail,
        }
      ]
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path:'/', //默认跳转
      redirect:'/init'
    }
  ]
})
