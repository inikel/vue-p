<template>
  <div>
    <MyDialog v-model:show="isTodosOpen">
      <TodoList
        :todos="todos"
      />
    </MyDialog>
    <div class="list" v-if="users.length > 0">
      <UserItem
        v-for="user in users"
        :userData="user"
        :key="user.id"
        @openTodos="showTodos"
      />
    </div>
    <h2 v-else>
      Список пользователей пуст
    </h2>
  </div>
</template>

<script>
import UserItem from "@/components/Users/Item.vue";
import TodoList from "@/components/Todos/List.vue";
import { mapState, mapMutations } from "vuex";

export default {
  components: { UserItem, TodoList },
  emits: ['openTodos'],
  data() {
    return {
      isTodosOpen: false,
    }
  },
  methods: {
    setCurrentUserData(userData) {
      this.currentUser = userData
    },
    showTodos(userData) {
      this.setCurrentUserData(userData)
      this.setCurrentUserTodosAndId(userData.id)
      this.isTodosOpen = true;
    },
    ...mapMutations({
      setCurrentUserTodosAndId: 'todosModule/setCurrentUserTodosAndId'
    })
  },
  computed: {
    ...mapState({
      users: state => state.usersModule.users,
      todos: state => state.todosModule.currentTodos.todos,
      // currentUserId: state => state.todosModule.currentUser.id
    })
  },
}
</script>

<style scoped>
.list {
  padding: 0 30px;
  margin: 0 auto;
  max-width: 60%;
}
</style>
