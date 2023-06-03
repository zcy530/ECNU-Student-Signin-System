import React, { useState, useEffect } from 'react'
import { TabBar } from 'antd-mobile-v2'
import { useHistory, withRouter } from 'react-router-dom'
import './index.scss'

const tabs = [
  {
    title: '签到',
    icon: require('@/assets/science.png'),
    selectedIcon: require('@/assets/science_sel.png'),
    badge: 0,
    selected: true,
    path: '/home'
  },
  {
    title: '工作台',
    icon: require('@/assets/explore.png'),
    selectedIcon: require('@/assets/explore_sel.png'),
    badge: 0,
    selected: false,
    path: '/workstation'
  },
  {
    title: '我的',
    icon: require('@/assets/me.png'),
    selectedIcon: require('@/assets/me_sel.png'),
    badge: 0,
    selected: false,
    path: '/me'
  }
]
function AppTabBar() {
  const history = useHistory()
  const pathname = history.location.pathname
  const [tabBar, settabBar] = useState(tabs)
  const changeTab = (index: number, path: string) => {
    settabBar(
      tabBar.map((tab, idx) => {
        tab.selected = index === idx
        return tab
      })
    )
    history.push(path)
  }
  
  const [hideTab, sethideTab] = useState(false)
  useEffect(() => {
    sethideTab(!tabs.map(item => item.path).includes(pathname))
  }, [pathname])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        height: '1rem',
        display: hideTab ? 'none' : 'block'
      }}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        noRenderContent={true}
        hidden={hideTab}>
        {tabBar.map((item, index) => {
          return (
            <TabBar.Item
              title={item.title}
              key="{item.title}"
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.icon}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background: `url(${item.selectedIcon}) center center /  21px 21px no-repeat`
                  }}
                />
              }
              selected={pathname === item.path}
              badge={item.badge}
              onPress={() => {
                changeTab(index, item.path)
              }}></TabBar.Item>
          )
        })}
      </TabBar>
    </div>
  )
}

export default withRouter(AppTabBar)
