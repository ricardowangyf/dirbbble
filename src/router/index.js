import Vue from 'vue'
import Router from 'vue-router'

const RegisterApp = () =>
    import("@/components/RegisterApp")
const AllItems = () =>
    import("@/components/AllItems")
// const NotFound = () =>
//     import("@/components/NotFound")


export const routes = [

    {
        path: '/RegisterApp',
        name: '/RegisterApp/index',
        component: RegisterApp
    },

    {
        path: '/AllItems',
        name: '/AllItems',
        component: AllItems
    }

]

export const router = new Router({
    routes // (缩写) 相当于 routes: routes
});

Vue.use(Router);