<template>
<header-tab></header-tab>
  <div class="content">
  <tab-wrap>
    <tab v-for="tab in tabs" v-bind:label="tab.label"></tab>
  </tab-wrap>
  </div>
</template>

<script>
  import HeaderTab from '../components/HeaderTab.vue';
  import TabWrap from '../components/TabWrap.vue';
  import Tab from '../components/Tab.vue';
  import TabCon from '../components/TabCon.vue'
  export default {
    data () {
      return {
        tabs:[
          {
            label:"动态",
            status:"active"
          },
          {
            label:"前端1",
            status:""
          },
          {
            label:"前端2",
            status:""
          }
        ]
      }
    },
    methods:{
      setStatus($index){
        this.tabs.map(function (v,i) {
          i==$index? v.status="active": v.status="";
        });
      }
    },
    components:{
      HeaderTab,TabWrap,Tab,TabCon
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
