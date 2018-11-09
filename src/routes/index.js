import Home from '../pages/Home'
import Widgets from '../pages/Widgets'
import Register from '../pages/Register'
import Confirm from '../pages/Confirm'
import Login from '../pages/Login'
import Account from '../pages/Account'
import NotFound from '../pages/NotFound'

const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/widgets',
    component: Widgets
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/confirm/:shortid',
    component: Confirm,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/notfound',
    component: NotFound
  }
]

export {
  Routes
}
