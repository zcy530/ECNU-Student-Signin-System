import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAppUserInfo } from '@/store/actions/user'
import Logo from '@/components/logo'
import './index.scss'
import IndexApi from '@/api/index'
import { Toast,Flex,WhiteSpace, Modal, Picker, List } from 'antd-mobile-v2'
import { useHistory } from 'react-router-dom'

type PageStateProps = {
  user: AppUserInfo
}

function Index() {
  const history = useHistory();
  const userInfo = useSelector((state: PageStateProps) => state.user);
  const dispath = useDispatch();

  const courseCompo = () => {
    return(
      <>
      <div style={{backgroundColor:'rgb(255, 255, 255,0.3)',margin:15,padding:10,borderRadius:10,fontSize:14}}>
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
          <Flex.Item>8:00</Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 238, 170)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>高级编程<br/>FRKNP-G74eWf9c4B</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 238, 170)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>history.push('/signin')}>高级编程<br/>FRKNP-G74eWf9c4B</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 219, 184)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>编译原理<br/>ETJGZ-HKlRwKwPDo</div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>10:00</Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(210, 195, 244)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>计算机逻辑基础<br/>EQMHU-YZT4U2tenp</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(159, 249, 180)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>软件测试与验证<br/>VRQCU-FZ0RhNlYNy</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(165, 255, 234)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>计算机系统<br/>RWCGH-aaKQ7cuoP7</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(81, 146, 193)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>数据库及其应用<br/>SE09332</div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>13:00</Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(165, 255, 234)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>关系型数据库<br/>KUQJW-4n62NiUaNh</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 251, 211)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>需求分析<br/>VXZHX-8AOZmdgDOd</div>
          </Flex.Item>
          
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>15:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(251, 178, 255)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>函数式编程<br/>VXZWB-5BJFMt6vwk</div>
          </Flex.Item>
        </Flex>

        <Flex style={{height:120,padding:4}}>
          <Flex.Item>18:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

      </div>
      </>
    )
  }

  const courseCompo2 = () => {
    return(
      <>
      <div style={{backgroundColor:'rgb(255, 255, 255,0.3)',margin:15,padding:10,borderRadius:10,fontSize:14}}>
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
          <Flex.Item>8:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(159, 249, 180)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>马克思主义基本原理<br/>VRQCU-FZ0RhNlYNy</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(218, 219, 184)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>编译原理<br/>ETJGZ-HKlRwKwPDo</div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>10:00</Flex.Item>
          
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(165, 255, 234)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>计算机系统<br/>RWCGH-aaKQ7cuoP7</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(81, 146, 193)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.fail('还没有到签到时间！', 1)}>JAVA面向对象<br/>SE09332</div>
          </Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>13:00</Flex.Item>

          
          <Flex.Item></Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(165, 255, 234)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>安卓开发<br/>KUQJW-4n62NiUaNh</div>
          </Flex.Item>
          <Flex.Item style={{backgroundColor:'rgb(255, 251, 211)',borderRadius:5,height: 120, padding:4}}>
            <div onClick={()=>Toast.success('Load success !!!', 1)}>数据库<br/>VXZHX-8AOZmdgDOd</div>
          </Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

        <Flex>
          <Flex.Item>15:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

        <Flex style={{height:120,padding:4}}>
          <Flex.Item>18:00</Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
          <Flex.Item></Flex.Item>
        </Flex>

      </div>
      </>
    )
  }


  const [showModal, setShowModal] = useState<boolean>(false);
  const [term, setTerm] = useState('2023年春季学期');
  const [week, setWeek] = useState('第1周');
  const [comp, setComp] = useState(courseCompo2)

  useEffect(() => {
    setComp(term=='2023年春季学期' ? courseCompo : courseCompo2)
  },[term])

  const weekList = [
    [
      {
        label: '第1周',
        value: '第1周',
      },
      {
        label: '第2周',
        value: '第2周',
      },
      {
        label: '第3周',
        value: '第3周',
      },
      {
        label: '第4周',
        value: '第4周',
      },
      {
        label: '第5周',
        value: '第5周',
      },
      {
        label: '第6周',
        value: '第6周',
      },
      {
        label: '第7周',
        value: '第7周',
      },
      {
        label: '第8周',
        value: '第8周',
      },
      {
        label: '第9周',
        value: '第9周',
      },
      {
        label: '第10周',
        value: '第10周',
      },
      {
        label: '第11周',
        value: '第11周',
      },
      {
        label: '第12周',
        value: '第12周',
      },
      {
        label: '第13周',
        value: '第13周',
      },
      {
        label: '第14周',
        value: '第14周',
      },
      {
        label: '第15周',
        value: '第15周',
      },
      {
        label: '第16周',
        value: '第16周',
      },
      {
        label: '第17周',
        value: '第17周',
      },
      {
        label: '第18周',
        value: '第18周',
      }

    ]
  ];

  const termList = [
    [
      {
        label: '2023年',
        value: '2023年',
      },
      {
        label: '2022年',
        value: '2022年',
      },
      {
        label: '2021年',
        value: '2021年',
      },
      {
        label: '2020年',
        value: '2020年',
      },
      {
        label: '2019年',
        value: '2019年',
      }, 
    ],
    [
      {
        label: '春季学期',
        value: '春季学期',
      },
      {
        label: '秋季学期',
        value: '秋季学期',
      },
      {
        label: '暑假学期',
        value: '暑假学期',
      },
    ],
  ];


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

      <WhiteSpace size="lg" />
      {/* <div style={{fontWeight:'bold',fontSize:20,margin:15}}>
        我的课程表
      </div> */}
      <div style={{margin:15}}>
      <Flex>
          <Flex.Item>        
            <Picker
              data={termList}
              title="学期"
              cascade={false}
              onChange={(value)=>setTerm(value!.toString().replace(',',''))}
              extra={term} >
                <List.Item arrow="horizontal" className='item-list-home'>学期</List.Item>
            </Picker>
          </Flex.Item>
          <Flex.Item>
            <Picker
              data={weekList}
              title="周数"
              cascade={false}
              onChange={(value)=>setWeek(value!.toString())}
              extra={week} >
                <List.Item arrow="horizontal" className='item-list-home'>周数</List.Item>
            </Picker>
          </Flex.Item>
        </Flex>
      </div>
      {comp}
      <WhiteSpace size="lg" />

    </div>
  )
}

export default Index
