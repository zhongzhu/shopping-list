<template>
  <div id="app" class='container'>
    <h1>{{title}}</h1>
    <add-item-component :items='items'/>
    <items-component :items='items'/>
  </div>
</template>

<script>
  import AddItemComponent from './components/AddItemComponent'
  import ItemsComponent from './components/ItemsComponent'
  import store from './vuex/store'
  import {mapGetters} from 'vuex'

  export default {
    // data () {
    //   return {
    //     items: [{ text: '小米电视4A', checked: true },
    //       { text: '米家扫地机器人', checked: false },
    //       { text: 'Yeelight LED吸顶灯', checked: false }],
    //     title: '双11都买些啥啦？'
    //   }
    // },
    store: store,
    components: { AddItemComponent, ItemsComponent },
    computed: mapGetters({
      title: 'getTitle'
    })
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  .container {
    width: 30%;
    margin: 20px auto 0px auto;
  }
</style>
