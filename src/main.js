import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/email-store"
import VueHighlightJS from 'vue3-highlightjs'

const app = createApp(App)

app.use(store)

app.use(VueHighlightJS)

app.mount('#app')
