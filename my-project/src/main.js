import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig from './router'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);

//配置路由
const router = new VueRouter({
  history : true,//启用html5的history pushState replaceState
  saveScrollPosition : true //当用户点击后退时用popstate事件相应
});

routerConfig(router);
Vue.component('Loading', {
  template:'<div class="loading_wrap"><div class="loading"></div><div class="loading"></div></div>'
})
router.start(App,'#app');


window.router = router
