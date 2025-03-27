import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import JobView from '@/views/JobView.vue';
import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path:'/jobs',
        name: 'Jobs',
        component: JobsView
    },
    {
        path:'/jobs/:id',
        name: 'Job',
        component: JobView
    },
    {
        path:'/jobs/add',
        name: 'AddJob',
        component: AddJobView
    },
    {
        path:'/jobs/edit/:id',
        name: 'editJob',
        component: EditJobView
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not-Found',
        component: NotFoundView
    }
    
    ]
    });

export default route;
