import Home from "@/pages/Home.vue"; // 导入视图组件
import About from "@/pages/About.vue";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];
