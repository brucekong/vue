<template>
  <div class="buttons-tab">
    <slot></slot>
  </div>
</template>

<style rel="stylesheet/scss" lang="scss">
  @import "../../src/assets/css/scss_common";
  .buttons-tab{
    position: fixed;
    width: 100%;
    background: #ccc;
    padding:j(20) 0;
    @extend %flex_box;
    a{
@extend %flex;
      display: block;
      text-align: center;
      color: #333;
    }
  }
</style>
