import './globals.css'
import Vue3Marquee from 'vue3-marquee'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import App from './App.vue'
import router from './router'
import { HiSearch ,HiUser,HiKey   } from "oh-vue-icons/icons";
addIcons(HiSearch,HiUser,HiKey  );
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)
app.component("v-icon", OhVueIcon);
app.mount('#app')
