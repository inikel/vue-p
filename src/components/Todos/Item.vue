<template>
  <div 
    class="todo-item"
    @click="() => toggleTodo(this.todoId)" 
  >
    <div><strong>Задача:</strong> {{ data.name }}</div>
    <input 
      type="checkbox" 
      :checked="data.done" 
    />
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        isChecked: this.data.done
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    computed: {
      todoId: '123'
    },
    methods: {
      ...mapMutations({
        toggleTodo: 'todosModule/toggleTodo'
      })
    },
    mounted() {
      console.log(this.todoId)
    }
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
