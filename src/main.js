// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import loading from './common/img/loading.gif'

import 'swiper/dist/css/swiper.min.css'
import './mock/mockServer' //只需要引入即可

Vue.use(VueLazyload,{
  loading
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,//注册路由器
  store //注册store
});
