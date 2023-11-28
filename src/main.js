import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { outsideClick } from '@/directive'

const app = createApp(App)
app.use(router)

app.directive('click-outside', outsideClick)

app.mount('#app')
