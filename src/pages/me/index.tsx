import React from 'react'
import './index.scss'
import { List, WingBlank } from 'antd-mobile-v2'
import Logo from '@/components/logo';
import { Button } from 'antd-mobile-v2';
import Lottie from 'react-lottie'
import touxiang from '../../assets/lottie/Designer.json'
import { useHistory } from 'react-router-dom';

function Me() {
  const history = useHistory();
  const Item = List.Item;

  const Options = {
    loop: true,
    autoplay: true,
    animationData: touxiang,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <div className="me-page">
        <div style={{ marginTop: '0.5rem' }}>
         <Lottie options={Options} height={250} width={250}/>
        </div>
        <div className="title">我的信息</div>
      </div>
      <WingBlank>
      
        <Item extra={'张彩仪'} className='item-list-first'>姓名</Item>
        <Item extra={'10184602316'} className='item-list'>学号</Item>
        <Item extra={'软件工程学院'} className='item-list'>学院</Item>
        <Item extra={'13896796126'} className='item-list'>手机</Item>
        <Item extra={'女'} className='item-list-last'>性别</Item>
    
    </WingBlank>
    <WingBlank>
        <Button type="ghost" style={{marginTop:15}} onClick={()=> history.push('/login')}>退出登陆</Button>
      </WingBlank>
    </div>
  )
}

export default Me
