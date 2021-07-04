import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from "@/router";
import store from './store';
// import 'amfe-flexible'; // 暂时不做响应式

import 'virtual:svg-icons-register';
import './less/index.less'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
