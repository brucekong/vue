<template>
  <header-tab icon="edit" title="HomeTab">
  </header-tab>
  <div class="content">
    <tab-wrap>
      <tab v-for="tab in tabs" v-bind:label="tab.label" v-bind:status="tab.status" v-bind:path="tab.path" @click="setStatus($index)"></tab>
    </tab-wrap>
    <!--<div class="buttons-tab">
      <a href="#tab1" class="tab-link active button">动态</a>
      <alink acttab2" class="tab-link button">前端</a>
    </div>-->
    <div class="content-block">
      <tab-con id="tab1" v-show="tabShow" status="active" >
        This is content1
      </tab-con>
      <tab-con id="tab2" v-show="!tabShow">This is content2</tab-con>
      <tab-con id="tab2" v-show="!tabShow">This is content2</tab-con>
    </div>
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
            path:"#tabl",
            status:"active"
          },
          {
            label:"前端1",
            path:"#tab2",
            status:""
          },
          {
            label:"前端2",
            path:"#tab2",
            status:""
          }
        ],
        tabShow:true
      }
    },
    methods:{
      setStatus($index){
        this.tabs.map(function (v,i) {
          i==$index? v.status="active": v.status="";
        });
        this.tabShow = !this.tabShow;

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
