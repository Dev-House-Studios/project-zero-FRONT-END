import RoomSelect from './RoomSelect'
import Auth from './Auth'

export default [
  {
    path: '/',
    name: 'RoomSelect',
    component: RoomSelect,
    meta: {}
  },
  {
    path: '/admin-login',
    name: 'AdminLogin',
    component: Auth,
    meta: {}
  }
]
