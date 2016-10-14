<template>
  <div id="list">
  <list-wrap>
    <list-item v-for="list in lists" v-bind:name="list.name" v-bind:pingyin="list.firstPinyin"></list-item>
  </list-wrap>
  </div>
</template>
<script>
  import ListWrap from '../components/ListWrap.vue'
  import ListItem from '../components/ListItem.vue'
  import $ from 'n-zepto';
  export default{
    ready(){
      this.showList();
    },
    data(){
      return{
        lists:[]
      }
    },
    methods:{
       showList(){
         const _self=this;
         $.ajax({
           type:"GET",
           url:"http://wap.autostreets.com/noHaggle/getParamsForList",
           dataType: "jsonp",
           jsonp: "jsoncallback",
           success:function(data){
             _self.lists=data.data.brandList;
             console.log(_self.lists);
           }
         });
       },
      scrollLoading(){

      }
    },
    components:{
      ListWrap,ListItem
    }
  }
</script>
