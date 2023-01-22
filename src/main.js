import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './axios'

loadFonts()

createApp(App).use(store)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
