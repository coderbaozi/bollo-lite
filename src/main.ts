import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style/main.css'
import 'virtual:windi.css'
import '@csstools/normalize.css'
import { Icon } from '@iconify/vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('Icon',Icon)
app.mount('#app')
