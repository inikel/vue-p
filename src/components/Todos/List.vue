<template>
  <h3>Todo list: </h3>
  <div v-if="todos.length > 0">
    <TodoItem
      v-for="todo in todos"
      :data="todo"
      :key="todo.id"
    />
  </div>
  <h2 v-else style="color: red">
    Users list is empty
  </h2>
</template>

<script>
import TodoItem from "@/components/Todos/Item.vue";

export default {
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 15px;
}
</style>
