import { createStore } from "vuex";
import { usersModule } from './usersModule'
import {todosModule} from "@/store/todosModule";

export default createStore({
  modules: {
    usersModule,
    todosModule,
  }
})
