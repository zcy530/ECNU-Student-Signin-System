import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, List, Steps, Icon, Button, WingBlank } from 'antd-mobile-v2'
import './index.scss'
import { leave, leaveDetail } from './mockData'


const Progress = () => {
  const history = useHistory();
  const Step = Steps.Step;
  const Item = List.Item;
  const [leaveDetailInfo, setLeaveDetailInfo] = useState<leave>(leaveDetail);
  const steps = [
    {
        title: '提交申请',
        description: '2023-5-30 23:06:03',
    }, 
    {
        title: '任课老师审批',
        description: '2023-5-30 23:30:03',
    }, 
    {
        title: '辅导员审批',
        description: '2023-5-31 12:20:03',
    }]
    .map((s, i) => <Step key={i} title={s.title} description={s.description} />);

  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/approval')}>
            请假详情
      </NavBar>


      <WingBlank style={{marginTop:20}}>
        <div style={{marginBottom:20,fontWeight:'bold',fontSize:16}}>请假信息详情</div>
        <div style={{backgroundColor: 'rgb(255,255,255)',borderRadius:10,  marginTop:15,padding:25}}>
          <Steps current={2}>{steps}</Steps>
        </div>
        
        <div style={{marginBottom:20,marginTop:20,fontWeight:'bold',fontSize:16}}>请假进度详情</div>
        <div style={{marginTop:15}}>
          <Item extra={leaveDetailInfo.name} className='item-list-first'>发起人</Item>
          <Item extra={leaveDetailInfo.course_id} className='item-list'>课程代码</Item>
          <Item extra={leaveDetailInfo.course_name} className='item-list'>课程名称</Item>
          <Item extra={leaveDetailInfo.professor_id} className='item-list'>教课教师</Item>
          <Item extra={leaveDetailInfo.week} className='item-list'>请假的周</Item>
          <Item extra={leaveDetailInfo.type} className='item-list'>请假类型</Item>
          <Item extra={leaveDetailInfo.reason} className='item-list'>请假理由</Item>
          <Item extra={leaveDetailInfo.time.split(' ')[0]} className='item-list'>发起时间</Item>
          <Item extra={leaveDetailInfo.changeTime!.split(' ')[0]} className='item-list-last'>修改时间</Item>
        </div>
       
        <Button type="ghost" style={{marginTop:26}} onClick={()=>history.push('/approval')}>撤回申请</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/approval')}>返回审批状态</Button>
      </WingBlank>

    </div>
  )
}

export default Progress;
