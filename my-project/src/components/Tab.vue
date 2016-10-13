<template>
  <a href="javascript:void(0)"  class="tab-link button" v-bind:class="status" v-text="label" ></a>
</template>
<script>
  export default{
    props:{
      index:"",
      label:"",
      status:""
    }
  }
</script>
