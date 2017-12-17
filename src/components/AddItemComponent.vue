<template id="add-item">
  <div class="input-group">
    <input v-model="newItem" type="text" class="form-control" placeholder="add shopping list item" @keyup.enter='addItem'>
    <span class="input-group-btn">
      <button class="btn btn-secondary" type="button" @click='addItem'>Add</button>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newItem: ''
    }
  },
  props: ['items'],
  methods: {
    addItem: function () {
      let text = this.newItem.trim()
      if (text) {
        this.items.push({text: text, checked: false})
        this.newItem = ''
      }
    }
  }
}
</script>