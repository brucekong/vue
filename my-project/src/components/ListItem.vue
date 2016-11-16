<template>
  <div class="list-wrap">
    <ul>
      <li>
        <a href="javascript:void(0)" class="list-item" @click="go">{{name}} {{pingyin}} {{age}} </a>
      </li>
    </ul>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../../src/assets/css/scss_common.scss";
.list-item{
  color: #333;
  padding:j(20);
  border-bottom:1px solid #ddd;
  display: block;

}
</style>
<script>
  export default{
    props:{
      "name":"",
      "pingyin":"",
      "age":""
    },
    methods:{
        go(){
            alert(1)
        }
    }
  }
</script>

