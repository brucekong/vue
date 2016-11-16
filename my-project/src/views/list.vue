<template>
  <div id="list">
  <list-wrap>
    <list-item v-for="list in lists | orderBy 'name'" v-bind:name="list.name" v-bind:pingyin="list.firstPinyin" ></list-item>
  </list-wrap>

  </div>
</template>
<script>
  import ListWrap from '../components/ListWrap.vue'
  import ListItem from '../components/ListItem.vue'
//  import Vue from 'vue'
//  import VueResource from 'vue-resource'
//  import $ from 'n-zepto';
//  Vue.use(VueResource);
  export default{
    ready(){
      const _self=this;
      let WH=document.documentElement.clientHeight;
//      console.log(WH);
      this.showList();
      document.addEventListener("scroll",function () {
        const scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        const scrollHeight=document.documentElement.scrollHeight||document.body.scrollHeight;

        (scrollTop+WH+100>scrollHeight && _self.loadFlag)?(_self.showList(),_self.loadFlag=false):null;

//        console.log(scrollTop);
      })

    },
    created(){
//      console.log(this.$data);

    },
    data(){
      return{
        lists:[],
        lists2:[
          {
            name:'a',
            age:'12'
          },
          {
            name:'b',
            age:'24'
          }
        ],
        loadFlag:true
      }
    },
    methods:{
       showList(){
         const _self=this;
         /*$.ajax({
           type:"GET",
           url:"http://wap.autostreets.com/noHaggle/getParamsForList",
           dataType: "jsonp",
           jsonp: "jsoncallback",
           success:function(data){
             _self.lists=data.data.brandList;
             console.log(_self.lists);
           }
         });*/
        this.$http.jsonp('http://wap.autostreets.com/noHaggle/getParamsForList',{jsonp: 'jsoncallback'}).then(function (data) {
           this.loadFlag=true;
          this.lists= this.lists.concat(data.data.data.brandList);
           console.log(this.lists);
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

