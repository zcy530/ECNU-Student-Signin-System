import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAppUserInfo } from '@/store/actions/user'
import Logo from '@/components/logo'
import './index.scss'
import IndexApi from '@/api/index'
import { Toast,Flex,WhiteSpace, Modal } from 'antd-mobile-v2'
import { useHistory } from 'react-router-dom'

type PageStateProps = {
  user: AppUserInfo
}

function Index() {
  const history = useHistory();
  const userInfo = useSelector((state: PageStateProps) => state.user);
  const dispath = useDispatch();

  const [showModal, setShowModal] = useState<boolean>(false);

  const updateInfo = async () => {
    // 测试 dispath action
    dispath(
      setAppUserInfo({
        userId: '413',
        nickName: 'developer',
        sex: 1
      })
    )

    // get 请求
    const list = await IndexApi.getList({ type: 1 })
    console.info(list[0].name)

    // post 请求
    const update = await IndexApi.updateInfo({
      name: 'Jhon',
      phone: '18888888888',
      password: 'xxxxxxxx'
    })
    if (update) {
      Toast.info('更新成功')
    }
  }
  const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
  );

  return (
    <div className="index-page">

      <Modal
          visible={showModal}
          transparent
          maskClosable={false}
          title="没有请假记录"
          footer={[{ text: '知道了', onPress: () => { setShowModal(false)}}]}
        >
          <div style={{ height: 30, overflow: 'scroll' }}>
            本周的该节课没有请假的记录哦
          </div>
      </Modal>

      <div className="head" onClick={updateInfo}>
        <h2 className="title">我的课程表</h2>
      </div>
      <WhiteSpace size="lg" />
      <div style={{backgroundColor:'rgb(255, 255, 255,0.3)',margin:10,padding:10,borderRadius:10}}>
        <Flex>
          <Flex.Item>1</Flex.Item>
          <Flex.Item><b>周一</b></Flex.Item>
          <Flex.Item><b>周二</b></Flex.Item>
          <Flex.Item><b>周三</b></Flex.Item>
          <Flex.Item><b>周四</b></Flex.Item>
          <Flex.Item><b>周五</b></Flex.Item>
          <Flex.Item><b>周六</b></Flex.Item>
        </Flex>

        <Flex style={{marginTop:16}}>
          <Flex.Item>7:50</Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(159, 249, 180)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>history.push('/signin')}>大学物理<br/>SE0102</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 238, 170)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>setShowModal(true)}>马克思基本原理<br/>MY0112</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 249, 207)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>Java程序设计<br/>SE0112</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 219, 184)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>创业基础<br/>SE3332</div>
          </Flex.Item>
        </Flex>

        <Flex style={{marginBottom:16}}>
          <Flex.Item>9:50</Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(210, 195, 244)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>专业英语<br/>EG0102</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 238, 170)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>马克思基本原理<br/>MY0112</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(252, 209, 250)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>图像学基础<br/>SE09332</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(81, 146, 193)',borderRadius:5,height: 110, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>数据库及其应用<br/>SE09332</div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>{' '}</Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>13:00</Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(170, 214, 164)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>离散数学<br/>SE0102</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 251, 211)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>学科导论<br/>MY0112</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(189, 165, 255)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>Java程序设计实验<br/>SE0112</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 219, 184)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>创业基础<br/>SE3332</div>
          </Flex.Item>
        </Flex>

        <Flex style={{marginBottom:16}}>
          <Flex.Item>15:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 251, 211)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>学科导论<br/>MY0112</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 219, 184)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>创业基础<br/>SE3332</div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>18:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 219, 184)',borderRadius:5}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>创业基础<br/>SE3332</div>
          </Flex.Item>
        </Flex>

      </div>
      <WhiteSpace size="lg" />

    </div>
  )
}

export default Index
