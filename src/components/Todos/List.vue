<template>
  <div v-if="todos.length > 0">
    <TodoItem
      v-for="todo in todos"
      :data="todo"
      :key="todo.id"
    />
  </div>
  <h2 v-else style="color: red">
    Список пользователей пуст
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
  },
  mounted() {
    console.log('mounted this.todos')
    console.log(this.todos)
  }
}
</script>

<style scoped>

</style>
