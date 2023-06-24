import React from 'react'
import './index.scss'
import { List, Toast, WingBlank } from 'antd-mobile-v2'
import { Button,Icon } from 'antd-mobile-v2';
import Lottie from 'react-lottie'
import touxiang from '../../assets/lottie/login.json'
import { useHistory } from 'react-router-dom';

function Login() {
  const Item = List.Item;
  const history = useHistory();

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
      <div className="login-page">
        <div style={{ marginTop: '0.5rem' }}>
         <Lottie options={Options} height={270} width={250}/>
        </div>
        <div className="title">学生登陆</div>
      </div>
      <WingBlank>
      
      <div style={{borderRadius:10,height:45,backgroundColor:'rgb(255,255,255)',padding:14}} >
      <input placeholder='请输入学号'></input>
      </div>
      <div style={{marginTop:20, borderRadius:10,height:45, backgroundColor:'rgb(255,255,255)',padding:14}} >
      <input placeholder='请输入密码' type='password'></input>
      </div>
      <Button type="ghost" style={{marginTop:15}} onClick={()=>{
        setTimeout(() => {
          history.push('/home')
          Toast.success('登陆成功！', 2);
        }, 1000);
      }} >登陆</Button>
        
      </WingBlank>
    </div>
  )
}

export default Login
