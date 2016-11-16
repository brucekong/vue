<template>
  <div class="list-wrap">
    <ul>
      <li v-for="list in data">
        <a href="javascript:void(0)" class="list-item" >{{list.firstPinyin}} {{list.name}}</a>
      </li>
    </ul>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../../src/assets/css/scss_common.scss";

  .list-wrap {
    padding: j(20);
  }

  .list-item {
    color: #333;
    padding: j(20);
    border-bottom: 1px solid #ddd;
    display: block;
    &:after{
      @extend %after;

    }
  }
</style>
<script>
  export default{
    props: {
      'data': "",
      "name": "",
      "pingyin": "",
      "age": ""
    },
    methods: {

    }
  }
</script>

