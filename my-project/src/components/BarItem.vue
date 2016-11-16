<template>
  <li class="tab-item external " role="presentation" v-link="{path:path,activeClass:'active',replace:true}">
    <a href="javascript:void(0)" v-text="label"></a>
  </li>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../../src/assets/css/scss_common.scss";
  .tab-item{
    @extend %flex;
    text-align: center;
    a{
      display: block;
      color: #000;
      padding:j(20) 0;
      font-size:j(24);
    }
  }
  .tab-item.active{
    background: #fff;
  }
</style>
<script>
  export default{
    props:{
      path:"",
      icon:"",
      label:""
    },
    computed:{
      iconClass(){
        return 'icon-'+this.icon
      }
    }
  }
</script>
