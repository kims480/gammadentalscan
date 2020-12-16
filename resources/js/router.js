// import Vue from "vue";
import VueRouter from "vue-router";
// import ExampleComponent from "./components/ExampleComponent.vue";
// import Example2Component from "./components/Example2Component.vue";
// import Default from "./layouts/default.vue";
// Vue.use(VueRouter);
const routes = [
    // { path: "/", component: Default },
    {
        path: "/", //auth/sign-in
        meta:{layout:"large-sidebar"},
        component: () =>
            import(/* webpackChunkName: 'home' */ "@/pages/admin/index"),
        name: "home",

    },

      {
        path: '/dashboard',
        meta:{layout:"dashboard"},
        component: import(/* webpackChunkName: 'dashboard' */ "@/layouts/default"),
        children: [
          {
            path: '',
            component: import(/* webpackChunkName: 'home' */ "@/pages/admin/index"),
          },
        ],
      },
    {
        path: "/login", //auth/sign-in
        meta:{layout:"auth"},
        component:()=> import(/* webpackChunkName: 'login' */ "@/pages/auth/login"),
        name: "login",


    },
    {
        path: "/request-full", //auth/sign-in
        // meta:{layout:"auth"},
        component:()=> import(/* webpackChunkName: 'login' */ "@/components/requests/GammaRequest"),
        name: "full-request",


    },
    {
        path: "/signin", //auth/sign-in
        meta:{layout:require( "@/pages/auth/signin").default.layout},
        component: () =>
            import(/* webpackChunkName: 'auth' */ "@/pages/auth/signin"),
        name: "sign-in",

    },
    {
        path: "/auth/logout", //auth/sign-in
        meta:{layout:require( "@/pages/auth/logout").default.layout},
        component: () =>
            import(/* webpackChunkName: 'auth' */ "@/pages/auth/logout"),
        name: "logout",

    },
    {
        path: "/register", //auth/sign-in
        meta:{layout:require( "@/pages/auth/signin").default.layout},
        component: () =>
            import(/* webpackChunkName: 'auth' */ "@/pages/auth/register"),
        name: "register",

    },
    {
        path: "/loginclean",
        meta:{layout:require( "@/pages/auth/loginclean").default.layout},
        component: () =>
            import(
                /* webpackChunkName: 'admin-storage' */ "@/pages/auth/loginclean"
            ),
        name: "loginclean"
    },
    {
        path: "/admin/users",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/users/index.vue"
            ),
        name: "users"
    },
    {
        path: "/admin/users/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/users/_name/_id.vue"
            ),
        name: "admin-users-name"
    },
    {
        path: "/admin/doctors",
        component: () =>
            import(
                /* webpackChunkName: 'admin-doctors' */ "@/pages/admin/doctors/index.vue"
            ),
        name: "doctors"
    },
    {
        path: "/admin/doctors/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-doctors' */ "@/pages/admin/doctors/_name/_id"
            ),
        name: "admin-doctors"
    },
    {
        path: "/admin/patients",
        component: () =>
            import(
                /* webpackChunkName: 'admin-patients' */ "@/pages/admin/patients/index.vue"
            ),
        name: "patients"
    },
    {
        path: "/admin/patients/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-patients' */ "@/pages/admin/patients/_name/_id"
            ),
        name: "admin-patients"
    },
    {
        path: "/admin/requests",
        component: () =>
            import(
                /* webpackChunkName: 'admin-requests' */ "@/pages/admin/requests/index.vue"
            ),
        name: "requests"
    },
    {
        path: "/admin/notification",
        component: () =>
            import(
                /* webpackChunkName: 'admin-notification' */ "@/pages/admin/notification/index.vue"
            ),
        name: "notification"
    },
    {
        path: "/admin/messages",
        component: () =>
            import(
                /* webpackChunkName: 'admin-messages' */ "@/pages/admin/messages/index.vue"
            ),
        name: "messages"
    },
    {
        path: "/admin/services",
        component: () =>
            import(
                /* webpackChunkName: 'admin-services' */ "@/pages/admin/services/index.vue"
            ),
        name: "services"
    },
    {
        path: "/admin/offers",
        component: () =>
            import(
                /* webpackChunkName: 'admin-offers' */ "@/pages/admin/offers/index.vue"
            ),
        name: "offers"
    },
    {
        path: "/admin/rating",
        component: () =>
            import(
                /* webpackChunkName: 'admin-rating' */ "@/pages/admin/points/index.vue"
            ),
        name: "points"
    },
    {
        path: "/admin/storage",
        component: () =>
            import(
                /* webpackChunkName: 'admin-storage' */ "@/pages/admin/storage/index.vue"
            ),
        name: "storage"
    },
    {
        path: "/admin/gdrive",
        component: () =>
            import(
                /* webpackChunkName: 'admin-gdrive' */ "@/pages/admin/storage/gdrive.vue"
            ),
        name: "gdrive"
    }

];
const router = new VueRouter({
    mode: "history",
    base:  "app",
    routes
});
export default router;
