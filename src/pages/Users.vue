<!-- вот то, что тут такой многоуровневый эмит это не очень, но пока не знаю как по другому -->
<template>
  <div>
    <UsersList 
      :users="users"
      @openTodos="showTodos"
    />
    <MyDialog v-model:show="isTodosOpen">
      <TodoList
        :todos="currentUser.todos"
      />
    </MyDialog>
  </div>
</template>

<script>
import TodoList from "@/components/Todos/List"
import { mapState } from 'vuex'
import UsersList from "@/components/Users/List.vue";

export default {
  components: {
    TodoList,
    UsersList,
},
  emits: ['openTodos'],
  data() {
    return {
      isTodosOpen: false,
      currentUserId: null,
    }
  },
  methods: {
    setCurrentUser(userData) {
      this.currentUser = userData
    },
    showTodos(userData) {
      this.setCurrentUser(userData)
      this.isTodosOpen = true;
    },
  },
  computed: {
    ...mapState({
      users: state => state.userStore.users,
    }),
  }
}
</script>

<style>

.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>
