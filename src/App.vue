<template>
  <div id="app" class='container'>
    <h1>{{title}}</h1>
    <AddItem :items='items'/>
    <ShoppingList :items='items'/>
  </div>
</template>

<script>
import AddItem from './components/AddItem'
import ShoppingList from './components/ShoppingList'

export default {
  name: 'app',
  data: function () {
    return {
      items: [{
        text: '小米电视4A', checked: true },
        { text: '米家扫地机器人', checked: false },
        { text: 'Yeelight LED吸顶灯', checked: false }],
      title: '双11都买些啥啦？'
    }
  },
  components: {
    AddItem,
    ShoppingList
  }
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
