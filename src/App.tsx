import React from 'react'
import './App.scss'
import RouterView from './router'
import config from '@/config'
import 'antd-mobile-v2/dist/antd-mobile.css';

console.info(config)

function App() {
  return <RouterView></RouterView>
}

export default App
