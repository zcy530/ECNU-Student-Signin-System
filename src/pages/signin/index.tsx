import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Icon,Toast, Button, WingBlank, List, Picker, Flex, Modal, ImagePicker,  } from 'antd-mobile-v2'
import './index.scss'
import { text } from 'express'
import { Value } from 'node-sass'

const Signin = () => {
  const history = useHistory();
  const Item = List.Item;
  const prompt = Modal.prompt;
  const [showQRSignModal, setShowQRSignModal] = useState<boolean>(false);
  const [signinway, setSigninway] = useState("请选择签到方式");
  const [signoutway, setSignoutway] = useState("请选择签退方式");
  const [file, setFile] = useState([])
  const signinWayList = [
    [
      {
        label: '二维码签到',
        value: '二维码签到',
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

  const onChange = (files, type, index) => {
    console.log(files, type, index);
    setFile(files)
  }

  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/home')}>
            课程签到
      </NavBar>

      <Modal
          visible={showQRSignModal}
          transparent
          maskClosable={false}
          title="二维码签到"
          footer={[{ text: '确认签到', onPress: () => { setShowQRSignModal(false)}}]}
        >
          <div style={{ height: 100, overflow: 'scroll'}}>
            <div style={{marginLeft: 20}}>
            请上传二维码照片开始签到
            </div>
            <div style={{marginLeft: 80,marginTop:20}}>
            <ImagePicker
              files={file}
              onChange={onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={file.length < 2}
              multiple={false}
            />
            </div>
          </div>
      </Modal>

      <WingBlank style={{marginTop:20}}>
        <div style={{marginBottom:20,fontWeight:'bold',fontSize:16}}>课程信息</div>
        <div style={{marginTop:15}}>
          <Item extra={'高级编程'} className='item-list-first'>课程名称</Item>
          <Item extra={'COMC0031112047.01'} className='item-list'>课程代码</Item>
          <Item extra={'陈良育'} className='item-list-last'>开课老师</Item>
        </div>
        <div style={{marginBottom:20,marginTop:20,fontWeight:'bold',fontSize:16}}>签到方式</div>

        <div style={{backgroundColor: 'rgb(255,255,255)',borderRadius:10, marginBottom:8, marginTop:15,paddingBottom:20}}>
          <Picker 
            data={signinWayList}
            title="签到方式"
            cascade={false}
            onChange={(value)=>setSigninway(value![0].toString())}
            extra={signinway} >
            <List.Item 
            arrow="horizontal"
            style={{backgroundColor: 'rgb(255,255,255)',borderRadius:10, marginBottom:8, marginTop:15}}>
              签到方式
            </List.Item>
          </Picker>
          <div 
          onClick={() => {
            if(signinway==='口令签到') {
              prompt('口令签到', '请输入你的签到口令',
              [
                {
                  text: '取消',
                },
                {
                  text: '提交',
                  onPress: () => {
                    console.log('tijiao');
                  },
                },
              ], 'default', '', ['sei-gjbc'])}
            if(signinway==='二维码签到') {
              setShowQRSignModal(true);
            }
            }
          }
          style={{backgroundColor:'rgb(56, 155, 255)',borderRadius:60,height:100,width:100,paddingTop:40,paddingLeft:20,margin:'auto'}}>开始签到</div>
        </div>

        <div style={{backgroundColor: 'rgb(255,255,255)',borderRadius:10, marginBottom:8, marginTop:15,paddingBottom:20}}>
          <Picker 
            data={signinWayList}
            title="签退方式"
            cascade={false}
            onChange={(value)=>setSignoutway(value![0].toString())}
            extra={signoutway} >
            <List.Item 
            arrow="horizontal"
            style={{backgroundColor: 'rgb(255,255,255)',borderRadius:10, marginBottom:8, marginTop:15}}>
              签退方式
            </List.Item>
          </Picker>
          <div style={{backgroundColor:'rgb(142, 255, 168)',borderRadius:60,height:100,width:100,paddingTop:40,paddingLeft:20,margin:'auto'}}
               onClick={()=>{Toast.success('Load success !!!', 1)}}>
            开始签退
          </div>
        </div>
        
        <div style={{marginBottom:20,marginTop:20,fontWeight:'bold',fontSize:16}}>该课程出勤情况</div>
        <div style={{backgroundColor:'rgb(255, 255, 255)',padding:10,borderRadius:10,marginTop:15}}>
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
