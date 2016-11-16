<template>
  <div id="list">
    <!--<list-item v-for="list in lists | orderBy 'name'" v-bind:name="list.name"
               v-bind:pingyin="list.firstPinyin"></list-item>-->
    <list-item v-bind:data="lists"></list-item>
    <Loading v-show="!loadFlag"></Loading>
  </div>
</template>
<script>
  //  import ListWrap from '../components/ListWrap.vue'
  import ListItem from '../components/ListContent.vue'
  import Loading from '../components/Loading.vue'
  //  import $ from 'n-zepto';
  export default{
    ready(){
      const _self = this;
      let WH = document.documentElement.clientHeight;
//      console.log(WH);
      this.showList();
      document.addEventListener("scroll", function () {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

        (scrollTop + WH + 100 > scrollHeight && _self.loadFlag) ? (_self.showList(), _self.loadFlag = false) : null;

//        console.log(scrollTop);
      })

    },
    created(){
//      console.log(this.$data);

    },
    data(){
      return {
        lists: [],
        lists2: [
          {
            name: 'a',
            age: '12'
          },
          {
            name: 'b',
            age: '24'
          }
        ],
        loadFlag: true
      }
    },
    methods: {
      showList(){
        const _self = this;
        this.$http.jsonp('http://wap.autostreets.com/noHaggle/getParamsForList', {jsonp: 'jsoncallback'}).then(function (data) {
          this.loadFlag = true;
          this.lists = this.lists.concat(data.data.data.brandList);
        });
      },
      scrollLoading(){

      }
    },
    components: {
      ListItem,Loading
    }
  }
</script>

