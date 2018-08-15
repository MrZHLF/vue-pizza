// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {store} from './store/store.js'
Vue.config.productionTip = false

Vue.prototype.$axios =axios;

//全局守卫

//router.beforeEach((to,from,next)=>{
//	
//	if(to.path == "/login" || to.path == "/register") {
//		next()
//	} else {
//		alert("请先登录");
//		next('/login')
//	}
//})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
