import { createStore } from "vuex";
import { usersModule } from './usersModule'

export default createStore({
  modules: {
    userStore: usersModule
  }
})
