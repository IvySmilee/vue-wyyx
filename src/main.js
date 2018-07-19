// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/mockServer' //只需要引入即可
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,//注册路由器
  store //注册store
});
