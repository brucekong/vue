<template>
  <div>
    <router-view></router-view>
    <bar class="bar bar-tab">
      <bar-item path="/home" icon="home" label="首页"></bar-item>
      <bar-item path="/search" icon="search" label="发现"></bar-item>
      <bar-item path="/message" icon="message" label="消息"></bar-item>
      <bar-item path="/me" icon="me" label="我"></bar-item>
    </bar>
  </div>
</template>

<script>
  import Bar from './components/Bar';
  import BarItem from './components/BarItem';
export default {
  components: {
    Bar,BarItem
  }
}
</script>
<style>
  @import './assets/css/sm.css';
  @import './assets/css/sm-extend.min.css';
</style>
