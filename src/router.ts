import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    title: "示例",
    name: "Example",
    path: "/components/example",
    component: () => import("./packages/example/docs/example.md"),
  },
];

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) return { top: 0 };
    if (to.hash) return { el: to.hash, top: 0 };
  },
};

const router = createRouter(routerConfig);

export default router;
