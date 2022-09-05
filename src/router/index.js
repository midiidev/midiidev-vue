import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // not sure what to do with home view, will add it back later
        {
            path: "/",
            redirect: "/about"
            // name: "home",
            // component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        // {
        //     path: "/about",
        //     name: "about",
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import("../views/AboutView.vue")
        // }
    ]
});

export default router;