import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@nutui/nutui/dist/style.css'
import './style.css'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
