<template>
  <div class="question">
    <h3 class="question-title">{{title}}</h3>
    <ul>
      <li v-for="item in {{items}}">
        <label><input type="{{type}}"></label>
      </li>
    </ul>
    <input type="radio" >
  </div>
</template>
<script>
  export default{
    props:{
      items:"",
      title:"",
      type:""
    }
  }
</script>
