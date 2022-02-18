import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import axios from "axios";
import config from "./config";

console.log("process", import.meta.env);
axios.get(config.mockApi + "/menu/list").then((res) => {
  console.log("axios", res);
});
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
