import Vue from 'vue'
import VueRouter from 'vue-router'

const MainLogin = () => import('../views/login/MainLogin')
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
},
{
  path: '/profile',
  component: Profile
},
{
  path: '/login',
  components: { MainLogin }
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
