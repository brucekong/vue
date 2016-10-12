import Vue from 'vue'
var Foo = Vue.extend({
  template: '<p>This is foo!</p>'
})

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})
export default function (router){
  //路由映射
  router.map({
    '*': {
      component (resolve) {
        require(['./views/home.vue'],resolve);
      }
    },
    '/home': {
      component (resolve) {
        require(['./views/home.vue'],resolve);
      }
    },
    '/search': {
      component (resolve) {
        require(['./views/search.vue'],resolve);
      }
    },
    '/me': {
      component (resolve) {
        require(['./views/me.vue'],resolve);
      }
    },
    '/message': {
      component (resolve) {
        require(['./views/message.vue'],resolve);
      }
    }
  })
}
