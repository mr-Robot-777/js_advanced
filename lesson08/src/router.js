import Vue from 'vue'
import Router from 'vue-router'
import Main from './routes/Main.vue'
import Contacts from "./routes/Contacts.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/product',
            name: 'Product',
            component: Main
        },
        {
            path: '/contacts',
            name: 'Contact Us',
            component: Contacts
        }
    ]
})
