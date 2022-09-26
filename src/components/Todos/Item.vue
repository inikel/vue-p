<template>
  <div class="todo-item">
    <div><strong>Задача:</strong> {{ data.name }}</div>
    <input 
      type="checkbox" 
      @click="setTodoChecked" 
      :checked="data.done" 
    />
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions({
        setUsers: 'userModule/setUsers'
      }),
      setTodoChecked(e) {
      }
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
  }
</style>
