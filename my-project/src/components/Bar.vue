<template>
  <ul class="nav nav-tabs" role="tablist">
     <slot></slot>
  </ul>
</template>
<style rel="stylesheet/scss" lang="scss">
  @import "../../src/assets/css/scss_common.scss";
  .nav-tabs{
    @extend %flex_box;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ccc;
  }

</style>
