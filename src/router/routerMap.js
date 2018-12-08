import Home from '@/views/Home/Home.vue'
import Attention from '@/views/Attention/Attention.vue'
import Colom from '@/views/Colom/Colom.vue'
import UserLogin from '@/components/UserLogin.vue'
import ArticleContent from '@/views/ArticleContent/ArticleContent.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/article/:id',
    name: 'articlecontent',
    component: ArticleContent
  },
  {
    path: '/attention',
    name: 'attention',
    component: Attention
  },
  {
    path: '/colom',
    name: 'colom',
    component: Colom
  },
  {
    path: '/userlogin',
    name: 'userlogin',
    component: UserLogin
  }
]

export default routes
