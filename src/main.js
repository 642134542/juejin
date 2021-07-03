import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "@/router";

import 'virtual:svg-icons-register';
import './less/index.less'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
