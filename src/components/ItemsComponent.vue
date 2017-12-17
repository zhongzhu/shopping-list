<template>
  <ul>
    <item-component v-for='(item,index) in items' :item='item'/>
  </ul>
</template>

<script>
  import ItemComponent from './ItemComponent'

  export default {
    props: ['items'],
    components: { ItemComponent }
  }
</script>

<style scoped>
  
</style>