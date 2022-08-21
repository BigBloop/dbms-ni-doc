import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import UserRegistration from "@/pages/UserRegistration.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user-registration",
    name: "UserRegistration",
    component: UserRegistration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
