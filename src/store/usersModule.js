
export const usersModule = {
  state: () => ({
    currentUser: {
      id: null,
      name: null,
      email: null,
      username: null
    },
    users: [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org"
      },
    ]
  }),
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  namespaced: true
}
