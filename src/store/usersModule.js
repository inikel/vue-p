
export const usersModule = {
  state: () => ({
    currentUser: {
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
    },
    fillCurrentUser(state, userData) {
      const { name, email, username } = userData

      console.log('userData in fillCurUser')
      console.log(userData)

      console.log('state.currentUser')
      console.log(state.currentUser)

      const obj = {
        name,
        email,
        username,
      }

      state.currentUser = obj

      console.log('obj')
      console.log(obj)
    }
  },
  namespaced: true
}
