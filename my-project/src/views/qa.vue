<template>
  <div class="page-header"><h2 class="qa-hd">{{idx+1}}</h2></div>
  <div class="btn-wrap navbar-fixed-bottom">

    <a href="javascript:void(0)" v-show="idx" class="btn prev-btn btn-primary btn-lg" @click="prev">上一题 </a>
    <a href="javascript:void(0)" v-show="idx!=questionsLength-1" class="btn next-btn btn-success btn-lg" @click="next">下一题</a>
  </div>
</template>

<script>
  export default{
    ready(){
      this.$http.get('static/questions.json',{}).then(
        function (data) {
          this.response=data.data.data;
          this.questionsLength=this.response.length;
        }
      );
    },
    data(){
      return {
        response:[],
        idx:0
      }
    },
    methods:{
      prev(){
        if(this.idx==0) return;
        this.idx--;
        this.question=this.response[this.idx];
        console.log(this.idx);

      },
      next(){

        this.idx++;
        console.log(this.idx);
        this.question=this.response[this.idx];
      },
      prefix(num,val){
        return new Array(num).join(0)
      }
    }
  }
</script>
<style>
  .btn-wrap{
    display: flex;
    margin-bottom: 50px;
  }
  .btn{
    flex:1;
    margin: 10px;
  }
  .qa-hd{ text-align: center;}
</style>
