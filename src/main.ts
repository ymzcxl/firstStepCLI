import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router/index";
import store from "@/store/index";
// 引入elemntPlus 并将语言设置为中文
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
// swiper
import swiper from "@/plugins/swiper";
// 重置样式
import "@/assets/css/reset.css";

createApp(App).use(router).use(store).use(ElementPlus, { locale: zhCn })
  .use(swiper)
  .mount("#app");
