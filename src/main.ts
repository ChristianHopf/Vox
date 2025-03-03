import './assets/main.css'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueOnsen from 'vue-onsenui'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueOnsen)

app.mount('#app')
