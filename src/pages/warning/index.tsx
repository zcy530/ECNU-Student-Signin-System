import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar,NoticeBar, Card, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile-v2'
import './index.scss'

const Warning = () => {
  const history = useHistory();

  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/workstation')}>
            缺课预警
      </NavBar>


      <WingBlank style={{marginTop:20}}>
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
            提示: 如果一门课缺课次数超过要求，可能会导致无法获得学分，进而无法毕业，请引起重视！
        </NoticeBar>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/workstation')}>返回首页</Button>
      </WingBlank>

    </div>
  )
}

export default Warning;
