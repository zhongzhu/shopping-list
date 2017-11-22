<template>
  <div>
    <ul>
      <li v-for="item in items" :class="{ 'removed': item.checked }">
        <div class="checkbox">
          <label>
            <input type="checkbox" v-model="item.checked"> {{ item.text }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data () {
    return {
    }
  },
  props: ['items'],
}
</script>

<style scoped>
.removed label {
  text-decoration: line-through;
}

ul li {
  list-style-type: none;
}

</style>