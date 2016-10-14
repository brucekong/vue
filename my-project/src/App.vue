<template>
    <bar class="bar bar-tab">
      <bar-item v-for="barItem in barItems" :path="barItem.path" :label="barItem.label" :icon="barItem.icon" ></bar-item>
<!--
      index:"",
      label:"",
      status:""-->
     <!-- <bar-item path="/home" label="首页" icon="home"></bar-item>
      <bar-item path="/search" label="发现" icon="search"></bar-item>
      <bar-item path="/message" label="消息" icon="message"></bar-item>
      <bar-item path="/me" label="我" icon="me"></bar-item>-->
    </bar>
  <!--<hello></hello>-->
  <!--<child></child>-->
  <router-view></router-view>
</template>

<script>
  import Bar from './components/Bar';
  import BarItem from './components/BarItem';
  import Hello from './components/Hello.vue';
  import Child from './components/Child.vue';

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
          }

        ]
      }
    },
    components: {
      Bar,
      BarItem,
      Hello,
      Child
    },
    replace:false
  }
</script>
<style>
  @import './assets/css/sm.css';

</style>
