// (possible exports: NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, 
// createRouter, createRouterMatcher, createWebHashHistory, createWebHistory, isNavigationFailure, 
// matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, 
// routerViewLocationKey, stringifyQuery, useLink, useRoute, useRouter, viewDepthKey
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: () => import(/* webpackChunkName: "main" */ '@/views/main'),
        },
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "home" */ '@/views/home'),
        },
        {
            path: '/dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
        },
        {
            path: '/Manager',
            component: () => import(/* webpackChunkName: "Manager" */ '@/views/Manager'),
        },
        {
            path: '/LiveHouse',
            component: () => import(/* webpackChunkName: "LiveHouse" */ '@/views/LiveHouse'),
        },
    ],
})

export default router
