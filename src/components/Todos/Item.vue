<template>
  <div 
    class="todo-item"
    @click="handleToggleTodo" 
  >
    <div><strong>Задача {{ data.id }}:</strong> {{ data.name }}</div>
    <input 
      type="checkbox" 
      :checked="data.done"
    />
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    data() {
      return {
        isChecked: this.data.done,
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapMutations({
        toggleTodo: 'todosModule/toggleTodo'
      }),
      handleToggleTodo() {
        this.toggleTodo(this.data.id)
      }
    },
  }
</script>

<style lang="scss" scoped>
  .todo-item {
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    cursor: pointer;
    width: 100%;
  }
</style>
