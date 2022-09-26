<template>
  <div class="list" v-if="todos.length > 0">
    <transition-group name="user-list">
      <TodoItem
        v-for="todo in todos"
        :data="todo"
        :key="todo.id"
      />
    </transition-group>
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
  }
}
</script>

<style scoped>

</style>
