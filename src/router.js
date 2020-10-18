import VueRouter from 'vue-router'
import Heroes from './pages/Heroes'
import Calendar from "@/pages/Calendar";
import Home from "@/pages/Home";
import MarkDown from "@/pages/MarkDown";
import Slider  from '@/pages/Slider'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/Heroes',
        name: 'Heroes',
        component: Heroes
    },{
        path: '/Calendar',
        name: 'Calendar',
        component: Calendar
    },{
        path: '/MarkDown',
        name: 'MarkDown',
        component: MarkDown
    },{
        path: '/Slider',
        name: 'Slider',
        component: Slider
    }]
const router = new VueRouter({
   // history: VueRouter.createWebHashHistory(),
    mode: "history",
    linkExactActiveClass: "vue-school-active-class",
    routes
});
export default router
