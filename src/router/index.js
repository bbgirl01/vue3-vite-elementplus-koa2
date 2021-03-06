import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/HelloWorld.vue";
import Welcome from "../components/Welcome.vue";
import Login from "../components/Login.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      title: "首页",
    },
    redirect: "/welcome",
    children: [
      {
        name: "welcome",
        path: "/welcome",
        component: Welcome,
        meta: {
          title: "欢迎页",
        },
      },
      {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
          title: "登录页",
        },
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
