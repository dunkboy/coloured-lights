import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('../views/login/MainLogin')
const Home = () => import('../views/home/Home')

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/login',
  component: Login
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
