import Loadable from 'loadable-components'
/* Import the components by Loadable */
const AppTabBar = Loadable(() => import('@/components/tabbar'))
const About = Loadable(() => import('@/pages/about'))
const Index = Loadable(() => import('@/pages/index'))
const Detail = Loadable(() => import('@/pages/detail'))

export interface routerConfigModel {
  path: string
  component?: any
  exact?: boolean
  children?: Array<routerConfigModel>
  redirect?: string
  tab?: boolean
}

export const routes: routerConfigModel[] = [
  {
    path: '/index',
    component: Index,
    exact: true,
    tab: true
  },
  {
    path: '/about',
    component: About,
    exact: true,
    tab: true
  },
  {
    path: '/detail',
    component: Detail,
    exact: true
  }
]
