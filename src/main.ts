import './globals.css'
import Vue3Marquee from 'vue3-marquee'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)

app.mount('#app')
