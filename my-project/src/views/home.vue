<template>
  <header-tab icon="edit" title="HomeTab">
  </header-tab>
  <div class="content">
    <tab-wrap>
      <tab v-for="tab in tabs" v-bind:label="tab.label" v-bind:status="tab.status" v-bind:path="tab.path"></tab>
    </tab-wrap>
    <!--<div class="buttons-tab">
      <a href="#tab1" class="tab-link active button">动态</a>
      <a href="#tab2" class="tab-link button">前端</a>
    </div>-->
    <div class="content-block">
      <div class="tabs">
        <div id="tab1" class="tab active">
          <div class="content-block">
            <p>This is tab 1 content</p>
          </div>
        </div>
        <div id="tab2" class="tab">
          <div class="content-block">
            <p>This is tab 2 content</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderTab from '../components/HeaderTab.vue';
  import TabWrap from '../components/TabWrap.vue';
  import Tab from '../components/Tab.vue'
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
            label:"前端",
            path:"#tab2"
          }
        ]
      }
    },
    components:{
      HeaderTab,TabWrap,Tab
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
