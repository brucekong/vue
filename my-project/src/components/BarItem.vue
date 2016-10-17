<template>
  <li class="tab-item external " role="presentation" v-link="{path:path,activeClass:'active',replace:true}">
    <a href="javascript:void(0)" v-text="label"></a>
  </li>
</template>
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
