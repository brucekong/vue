<template>
  <div class="child">This is a child components {{name}} {{age}}</div>
  <child></child>
</template>
<script>
  export default{
    data(){
      return {
        name:"kxl",
        age:28
      }
    },
    components:{
      Child:{
        template:"<div>child's child</div>"
      }
    }
  }
</script>
<style>
  .child{
    font-size: 24px; color: #f00;
  }
</style>
