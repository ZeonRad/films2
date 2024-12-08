import { createRouter, createWebHistory } from "vue-router";

const routes  = [
    {
        name: "index",
        path: "/",
        component: () => import("@pages/index.vue"),
        meta: {
            title: "Főoldal"
        }
    },
    {
        name: "category",
        path: "/categories/:id",
        component: () => import("@pages/category.vue"),
        meta: {
            title: "Kategóriához tartozó filmek"
        }
    },
     {
        name: "film",
       path: "/films/:id",
       component: () => import("@pages/film.vue"),
        meta: {
            title: "Kiválasztott film"
        }
     }
]

export const router = createRouter({
    routes,
    history: createWebHistory()
    //linkActiveClass: "active"
});

router.beforeEach((to) => {
    document.title = to.meta.title
})