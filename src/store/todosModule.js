export const todosModule = {
  state: () => ({
    currentTodos: {
      todos: [],
      todosUserId: null
    },
    allTodos: [
      {
        "userId": 1,
        "todos": [
          {
            "id": 1,
            "name": "eat",
            "done": true,
          },
          {
            "id": 2,
            "name": "repeat",
            "done": false,
          }
        ],
      },
      {
        "userId": 2,
        "todos": [
          {
            "id": 1,
            "name": "eat",
            "done": true,
          },
          {
            "id": 2,
            "name": "repeat",
            "done": false,
          }
        ],
      },
    ]
  }),
  mutations: {
    setTodos(state, todos) {
      state.todos = todos
    },
    setCurrentUserTodosAndId(state, id) {
      state.currentTodos.todosUserId = id
      const todosObj = state.allTodos.find(i => i.userId == id)

      if (!todosObj) return
      const { todos } = todosObj
      state.currentTodos.todos = todos
    },
    toggleTodo(state, todoId) {
      const currentTodo = state.currentTodos.todos.find(i => i.id == todoId)
      currentTodo.done = !currentTodo.done

      let { todos: currentUserTodos } = state.allTodos.find(i => i.userId == state.currentTodos.todosUserId)
      currentUserTodos = currentTodo.todos
    }
  },
  namespaced: true
}
