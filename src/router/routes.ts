
import { lazy } from 'react'
const Home = lazy(() => import(/* webpackChunkName: "Index" */ '@/pages/home/index'))
const Workstation = lazy(() => import(/* webpackChunkName: "About" */ '@/pages/workstation'))
const Detail = lazy(() => import(/* webpackChunkName: "Detail" */ '@/pages/detail'))
const Me = lazy(() => import(/* webpackChunkName: "Me" */ '@/pages/me'))
const LeaveRequest = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/leave'))
const Approval = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/approval'))
const Warning = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/warning'))
const Progress = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/progress'))
const Signin = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/signin'))
const Login = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/login'))
const MyMap = lazy(() => import(/* webpackChunkName: "Leave" */ '@/pages/map'))

export interface RouteConfig {
  path: string
  component?: any
  exact?: boolean
}

export const routes: RouteConfig[] = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/workstation',
    component: Workstation,
    exact: true
  },
  {
    path: '/detail',
    component: Detail,
    exact: true
  },
  {
    path: '/me',
    component: Me,
    exact: true
  },
  {
    path: '/askforleave',
    component: LeaveRequest,
    exact: true
  },
  {
    path: '/approval',
    component: Approval,
    exact: true
  },
  {
    path: '/warning',
    component: Warning,
    exact: true
  },
  {
    path: '/progress',
    component: Progress,
    exact: false
  },
  {
    path: '/signin',
    component: Signin,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  },
  {
    path: '/map',
    component: MyMap,
    exact: true
  }
]
