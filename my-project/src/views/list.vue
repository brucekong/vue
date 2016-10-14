<template>
  <list></list>
</template>
<script>
  import List from '../components/ListItem.vue'
  import $ from 'n-zepto';
  console.log($);
  export default{
    ready(){
      this.$http.
    }
  }
  $.ajax({
    url:"",
    success:function(data){
      console.log(data);
    }
  });
</script>
