import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Icon, Button, WingBlank, List, Picker, Flex } from 'antd-mobile-v2'
import './index.scss'

const Signin = () => {
  const history = useHistory();
  
  const signinWay = [
    [
      {
        label: '扫码签到',
        value: '扫码签到',
      },
      { 
        label: '定位签到',
        value: '定位签到',
      },
      {
        label: '口令签到',
        value: '口令签到',
      },
    ]
  ];

  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/home')}>
            课程签到
      </NavBar>

      <WingBlank style={{marginTop:30}}>
        <Picker 
          data={signinWay}
          title="签到方式"
          cascade={false}
          extra="请选择签到方式" >
          <List.Item 
          arrow="horizontal"
          style={{backgroundColor: 'rgb(255,255,255,0.5)',borderRadius:5,marginBottom:8}}>
            签到方式
          </List.Item>
        </Picker>

        <Picker 
          data={signinWay}
          title="签到方式"
          cascade={false}
          extra="请选择签到方式" >
          <List.Item 
          arrow="horizontal"
          style={{backgroundColor: 'rgb(255,255,255,0.5)',borderRadius:5, marginBottom:8, marginTop:15}}>
            签退方式
          </List.Item>
        </Picker>
        
        <Flex>
          <Flex.Item><Button type='primary' style={{marginTop:10}} onClick={()=>history.push('/home')}>开始签到</Button></Flex.Item>
          <Flex.Item><Button type='primary' style={{marginTop:10}} onClick={()=>history.push('/home')}>开始签退</Button></Flex.Item>
        </Flex>
        <div style={{backgroundColor:'rgb(255, 255, 255,0.3)',padding:10,borderRadius:8,marginTop:15}}>
        <Flex>
          <Flex.Item>情况</Flex.Item>
          <Flex.Item><b>正常</b></Flex.Item>
          <Flex.Item><b>缺课</b></Flex.Item>
          <Flex.Item><b>迟到</b></Flex.Item>
          <Flex.Item><b>早退</b></Flex.Item>
          <Flex.Item><b>病假</b></Flex.Item>
        </Flex>

        <Flex style={{marginTop:16}}>
          <Flex.Item>3.1</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item><Icon type="check-circle-o" /></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

        <Flex style={{marginTop:16}}>
          <Flex.Item>3.7</Flex.Item>
          <Flex.Item><Icon type="check-circle-o" /></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

        <Flex style={{marginTop:16}}>
          <Flex.Item>3.14</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item><Icon type="check-circle-o" /></Flex.Item>
          <Flex.Item><Icon type="check-circle-o" /></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>
        </div>
      </WingBlank>

    </div>
  )
}

export default Signin;
