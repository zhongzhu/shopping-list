<template>
  <li :class="{ 'removed': item.checked }">
    <div class="form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" v-model="item.checked">
        {{ item.text }}  
      </label>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
  .removed {
    color: gray;
  }

  .removed label {
    text-decoration: line-through;
  }

  ul li {
    list-style-type: none;
  }  

</style>