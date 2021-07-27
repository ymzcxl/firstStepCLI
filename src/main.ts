import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'element-plus/lib/theme-chalk/index.css'
import swiper from './plugins/swiper'

createApp(App).use(router).use(store).use(ElementPlus).use(swiper).mount('#app')
