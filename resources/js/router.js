// import Vue from "vue";
import VueRouter from "vue-router";
import store from '@/store/index'
import Home from '@/pages/admin/index'
import Signin from '@/pages/auth/signin'
// import ExampleComponent from "./components/ExampleComponent.vue";
// import Example2Component from "./components/Example2Component.vue";
// import Default from "./layouts/default.vue";
// Vue.use(VueRouter);
const routes = [
    // { path: "/", component: Default },
    {
        path: "/", //auth/sign-in
        meta:{layout:"large-sidebar"},
        component: Home,
        name: "home",
        beforeEnter: (to, from, next) => {
            var auth = localStorage.getItem('token')
            if (!auth) {
              store.dispatch('auth/logout')
              next('/signin')
            } else {
                store.dispatch('auth/user')
                .then(response => {
                      next()
                    }, response => {
                      next('/signin')
                })
            }
          },

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
        component: Signin,
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
        meta:{layout:'auth'},
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
        meta: { guard: 'SUPER_ADMIN' },
        // children: administrationRoutes,
        name: "users"
    },
    {
        path: "/admin/users/add",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/users/add.vue"
            ),
        meta: { guard: 'SUPER_ADMIN' },
        // children: administrationRoutes,
        name: "add-user",

    },
    {
        path: "/admin/user/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/users/add.vue"
            ),
        meta: { guard: 'SUPER_ADMIN' },
        // children: administrationRoutes,
        name: "edit-user",
        props:true
    },
    {
        path: "/admin/users/profile",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/users/profile.vue"
            ),
        meta: { guard: 'SUPER_ADMIN' },
        // children: administrationRoutes,
        name: "admin-user-profile"
    },
    {
        path: "/user/profile",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/user/myProfile.vue"
            ),
        // meta: { guard: 'SUPER_ADMIN' },
        // children: administrationRoutes,
        name: "user-profile"
    },
    {
        path: "/admin/users/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-users' */ "@/pages/admin/users/_name/_id.vue"
            ),
        name: "admin-users-name",
        props:true
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
        path: "/admin/doctors/show",
        component: () =>
            import(
                /* webpackChunkName: 'admin-doctors' */ "@/pages/admin/doctors/show.vue"
            ),
        name: "doctor-show"
    },
    {
        path: "/admin/doctors/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-doctors' */ "@/pages/admin/doctors/_name/_id"
            ),
        name: "admin-doctors-name"
    },
//////////////////////Patients Routes///////////////////////////
    {
        path: "/admin/patients",
        component: () =>
            import(
                /* webpackChunkName: 'admin-patients' */ "@/pages/admin/patients/index.vue"
            ),
        name: "patients"
    },
    {
        path: "/admin/patients/add",
        component: () =>
            import(
                /* webpackChunkName: 'admin-patients' */ "@/pages/admin/patients/add.vue"
            ),
        name: "add-patient"
    },
    {
        path: "/admin/patient/:name/:id",
        component: () =>
            import(
                /* webpackChunkName: 'admin-patients' */ "@/pages/admin/patients/add.vue"
            ),
        name: "edit-patient",
        props:true
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
    },
    {
        path: "/points",
        component: () =>
            import(
                /* webpackChunkName: 'crud-test' */ "@/pages/admin/points/index.vue"
            ),
        name: "points-crud"
    },
    {
        path: "/404",
        meta:{layout:""},
        component: () =>
            import(
                /* webpackChunkName: 'Not-Found' */ "@/pages/error/404.vue"
            ),
        name: "404"
    }

];
const router = new VueRouter({
    mode: "history",
    base:  "dashboard",
    routes
});

router.beforeEach(function (to, from, next) {
    let middleware
    store.state.page = null
    to.matched.some(m => {
      middleware = m.meta.guard
    })
    if (typeof middleware === 'undefined') {
      next()
    } else {
      if (store.getters['checkPermission'](middleware)) {
          console.log('checkPermission:',store.getters['checkPermission'])
          console.log('checkPermission-middleware:',store.getters['checkPermission'](middleware))
            window.scrollTo(0, 0)
        next()
      } else if (store.getters['isAuth']) {
            store.dispatch('notifications/pushNotif','You are not Authorized','error')
            toasted.global.Not_Authorized();
        next({name:'home'})

      } else {
        next({name:'signin'})
      }
    }
  })
export default router;
