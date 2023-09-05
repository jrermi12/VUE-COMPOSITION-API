import { createRouter, createWebHashHistory } from "vue-router" 
import IndeView from "../views/indexView.vue"
import EventsView from "../views/EventsView.vue"
import EventDetailView from "../views/EventDetailView.vue"
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BaseUrl),
    routes: [
        {
            path: "/", 
            name: "home", 
            component: IndeView
        },
        {
            path: "/events", 
            name: "events", 
            component: EventsView
        },
        {
            path: "/event", 
            name: "event", 
            component: EventDetailView
        }
    ]
})

export default router