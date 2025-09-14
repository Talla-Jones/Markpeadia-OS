import {createRouter, createWebHistory} from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Recognition from '../components/recognition.vue'
import Dashboard from '../components/dashboard.vue'
import Tasks from '../components/tasks.vue'
import Time from '../components/time.vue'
import Leave from '../components/leave.vue'
import Projects from '../components/projects.vue'
import Companyfeed from '../components/companyfeed.vue'

const routes = [
  {path: '/', component: Login},
  {path: '/register', component: Register},
  {path: '/dashboard', component: Dashboard},
  {path: '/recognition', component: Recognition},
  {path: '/tasks', component: Tasks},
  {path: '/time', component: Time},
  {path: '/leave-request', component: Leave},
  {path: '/projects', component: Projects},
  {path: '/companyfeed', component: Companyfeed},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router