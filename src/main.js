import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/email-store"

createApp(App).use(store).mount('#app')
