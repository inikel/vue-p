<template>
  <div>
    <MyDialog v-model:show="isTodosOpen">
      <TodoList
        :todos="todos"
        v-if="!!todos.length"
      />
      <div v-else>no todos</div>
    </MyDialog>
    <MyDialog v-model:show="isEditFormOpen">
      <EditForm 
        :userData="currentUserData"
      />
    </MyDialog>
    <div class="list" v-if="users.length > 0">
      <UserItem
        v-for="user in users"
        :userData="user"
        :key="user.id"
        @openTodos="showTodos"
        @openEditForm="showEditForm"
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
import MyDialog from "../UI/MyDialog.vue";
import EditForm from "./EditForm.vue";

export default {
  components: { UserItem, TodoList, MyDialog, EditForm },
  emits: ['openTodos', 'openEditForm'],
  data() {
    return {
      isTodosOpen: false,
      isEditFormOpen: false,
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
    showEditForm(userData) {
     this.isEditFormOpen = true
    },
    ...mapMutations({
      setCurrentUserTodosAndId: 'todosModule/setCurrentUserTodosAndId'
    })
  },
  computed: {
    ...mapState({
      currentUserData: state => state.usersModule.currentUser,
      users: state => state.usersModule.users,
      todos: state => state.todosModule.currentTodos.todos,
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
