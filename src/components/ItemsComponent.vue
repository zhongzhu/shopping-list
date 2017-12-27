<template>
  <ul>
    <item-component v-for='(item,index) in items' :item='item'/>
  </ul>
</template>

<script>
  import ItemComponent from './ItemComponent'
  import {mapGetters} from 'vuex'

  export default {
    components: { ItemComponent },
    computed: mapGetters({
      items: 'getItems'
    })
  }
</script>

<style scoped>
</style>