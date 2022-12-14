import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store';
import router from './router/router';

import customComponents from '@/components/UI/index'

const app = createApp(App)

customComponents.forEach(component => {
  app.component(component.name, component)
})

app
  .use(router)
  .use(store)
  .mount('#app')
