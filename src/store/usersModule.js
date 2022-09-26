
export const usersModule = {
  state: () => ({
    users: [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
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
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "todos": [
          {
            "id": 1,
            "name": "eat 2",
            "done": false,
          },
          {
            "id": 2,
            "name": "repeat 2 ",
            "done": false,
          }
        ],
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "todos": [
          {
            "id": 1,
            "name": "eat 3",
            "done": false,
          },
          {
            "id": 2,
            "name": "repeat 3",
            "done": false,
          }
        ],
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "todos": [
          {
            "id": 1,
            "name": "eat 4",
            "done": false,
          },
          {
            "id": 2,
            "name": "repeat 4",
            "done": false,
          }
        ],
      },
    ]
  }),
  mutations: {
    setUsers(state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchUsers({ commit }) {

    }
  }
}
