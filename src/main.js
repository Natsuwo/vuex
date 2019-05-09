import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import { store } from './store/store'



Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
})


router.beforeResolve((to, from, next) => {
  if (to.path) {
    NProgress.start()
  }
  next()
});


router.afterEach(() => {
  NProgress.done();
});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
