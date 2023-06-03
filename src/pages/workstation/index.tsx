import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, WingBlank, Badge  } from 'antd-mobile-v2'
import Lottie from 'react-lottie'
import Work from '../../assets/lottie/management.json'
import './index.scss'

const About = () => {
  const history = useHistory()

  const Options = {
    loop: true,
    autoplay: true,
    animationData: Work,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      
      <div className="about-page">
        <div style={{ marginTop: '1rem' }}>
          <Lottie options={Options} height={250} width={250}/>
        </div>
        <div className="title">工作台</div>
      </div>

      <WingBlank>
        <Button type="ghost" onClick={()=>history.push('/askforleave')}>请假申请</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/approval')}>审批状态</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/warning')}>缺课预警<Badge text={'2'} style={{ marginLeft: 5 }} /></Button>
      </WingBlank>
    </div>
  )
}

export default About
