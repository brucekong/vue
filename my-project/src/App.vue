<template>
  <div id="app">
    <p>12132132</p>
    <Hello></Hello>
  </div>
 <!-- <bar  class="bar bar-tab">
    <bar-item path="/home" label="首页" icon="home"></bar-item>
    <bar-item path="/search" label="发现" icon="search"></bar-item>
    <bar-item path="/message" label="消息" icon="message"></bar-item>
    <bar-item path="/me" label="我" icon="me"></bar-item>
  </bar>-->
</template>

<script>
//  import Bar from './components/Bar';
//  import BarItem from './components/BarItem';
  import Hello from './components/Hello.vue';

  export default {
    components: {
//      Bar,
//      BarItem
      Hello
    }
  }
</script>

<style>
  /*@import './assets/css/sm.css';*/

</style>
