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
      const { todos } = state.allTodos.find(i => i.userId == id)
      state.currentTodos.todos = todos
    },
    toggleTodo(state, todoId) {
      const currentTodo = state.currentTodos.todos.find(i => i.id == todoId)
      console.log('state.currentTodos, todoId: ' + todoId)
      console.log(state.currentTodos)
      currentTodo.done = !currentTodo.done

      let { todos: currentUserTodos } = state.allTodos.find(i => i.userId == state.currentTodos.todosUserId)
      currentUserTodos = currentTodo.todos
    }
  },
  namespaced: true
}
