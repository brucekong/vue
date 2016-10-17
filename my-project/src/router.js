import Vue from 'vue'

export default function (router){
  //路由映射
  router.map({
    '/': {
      component (resolve) {
        require(['./views/home.vue'],resolve);
      }
    },
    '/home': {
      component (resolve) {
        require(['./views/home.vue'],resolve);
      }
    },
    '/list': {
      component (resolve) {
        require(['./views/list.vue'],resolve);
      }
    },
    '/qa': {
      component (resolve) {
        require(['./views/qa.vue'],resolve);
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
