import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { NavBar, List, Steps, Icon, Button, WingBlank, InputItem } from 'antd-mobile-v2'
import './index.scss'
import { leave, leaveDetail } from './mockData'
import get from 'lodash/get'



const Progress = () => {

  
  const history = useHistory();
  const Step = Steps.Step;
  const Item = List.Item;
  const location = useLocation()
  //console.log(get(location,'state.id'))
  const [leaveDetailInfo, setLeaveDetailInfo] = useState<leave>(leaveDetail);
  const steps = [
    {
        title: '提交申请',
        description: leaveDetailInfo.time.split('.')[0],
    }, 
    {
        title: '任课老师审批',
        description: leaveDetailInfo.changeTime!.split('.')[0],
    }, 
    {
        title: '辅导员审批',
        description: '',
    }]
    .map((s, i) => <Step key={i} title={s.title} description={s.description} />);

    useEffect(() => {
      fetch(`http://8.130.86.79:8072/leave-service/leave/info?noteId=${get(location,'state.id')}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
      })
      .then(response => response.json())
      .then((value)=> {
        setLeaveDetailInfo(value);
        console.log(leaveDetailInfo)
        // console.log(value)
      })
    },[])

  return (
    <div style={{paddingBottom:10}}>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/approval')}>
            请假详情
      </NavBar>


      <WingBlank style={{marginTop:20,marginBottom:15}}>
        <div style={{marginBottom:20,fontWeight:'bold',fontSize:16}}>请假信息详情</div>
        <div style={{backgroundColor: 'rgb(255,255,255)',borderRadius:10,  marginTop:15,padding:25}}>
          <Steps current={leaveDetailInfo.status}>{steps}</Steps>
        </div>
        
        <div style={{marginBottom:20,marginTop:20,fontWeight:'bold',fontSize:16}}>请假进度详情</div>
        <div style={{marginTop:15}}>
          <InputItem extra={leaveDetailInfo.name} className='item-list-first'>发起人</InputItem>
          <InputItem extra={leaveDetailInfo.course_id} className='item-list'>课程代码</InputItem>
          <InputItem extra={leaveDetailInfo.courseName} className='item-list'>课程名称</InputItem>
          <Item extra={leaveDetailInfo.professor_id} className='item-list'>教课教师</Item>
          <Item extra={'第'+leaveDetailInfo.week+'周'} className='item-list'>请假的周</Item>
          <InputItem extra={leaveDetailInfo.reason} className='item-list'>请假理由</InputItem>
          <Item extra={leaveDetailInfo.time.split(' ')[0]} className='item-list'>发起时间</Item>
          <Item extra={leaveDetailInfo.changeTime!.split(' ')[0]} className='item-list-last'>修改时间</Item>
        </div>
       
        <Button type="ghost" style={{marginTop:26}} onClick={()=>history.push('/approval')}>撤回申请</Button>
        <Button type="ghost" style={{marginTop:15,marginBottom:10}} onClick={()=>history.push('/approval')}>返回审批状态</Button>
      </WingBlank>

    </div>
  )
}

export default Progress;
