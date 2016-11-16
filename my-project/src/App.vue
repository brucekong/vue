<template>
    <bar class="bar bar-tab">
      <bar-item v-for="barItem in barItems" :path="barItem.path" :label="barItem.label" :icon="barItem.icon" ></bar-item>
    </bar>
  <!--<hello></hello>-->
  <!--<child></child>-->
  <router-view></router-view>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../src/assets/css/reset.scss";
  @import "../src/assets/css/scss_common.scss";
  @import "../src/assets/css/css_common.scss";
</style>
<script>
  import flexable from 'assets/js/lib/flexible';
  import Bar from './components/Bar';
  import BarItem from './components/BarItem';

//  import Hello from './components/Hello.vue';
//  import Child from './components/Child.vue';

  export default {
    data(){
      return{
        barItems:[
          {
            path:"/home",
            label:"首页",
            icon:"home"
          },
          {
            path:"/list",
            label:"列表",
            icon:"search"
          },
          {
            path:"/qa",
            label:"问答",
            icon:"search"
          }

        ]
      }
    },
    components: {
      Bar, BarItem
//      Hello
//      Child
    },
    replace:false
  }
</script>

