import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Posts';
import SinglePost from './pages/SinglePost';
import NotFound from './pages/NotFound';



const router = new VueRouter ({
    mode: "history", 
    routes: [
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path:'/chi-siamo',
            name:'about',
            component: About
        },
        {
            path:'/blog',
            name:'blog',
            component: Blog
        },
        {
            path:'/blog/:slug',
            name:'single-post',
            component: SinglePost
        },
        {
            path:'/*',
            name:'not-found',
            component: NotFound
        },
    ]
});

export default router