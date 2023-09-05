import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import App from './App.vue'
import router from './route/index.route'

const app = createApp(App)
app.use(createPinia()).use(router).mount('#app')
