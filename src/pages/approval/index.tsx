import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Card, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile-v2'
import './index.scss'
import { leave, leaveData } from './mockData'

const Approval = () => {
  const history = useHistory();
  const [leaveInfo, setLeaveInfo] = useState<leave[]>(leaveData);

  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/workstation')}>
            审批状态
      </NavBar>

      <WingBlank style={{marginTop:20}}>
        {leaveInfo.map((value:leave,i)=>(
            <Card className='leave-card' onClick={()=>history.push('/progress')}>
                <Card.Header
                    className='leave-card-head'
                    title={value.course_name}
                    extra={<span style={{color:'blue'}}>待审批</span>}
                />
                <Card.Body>
                    <div><b>请假时间：</b>{value.time}</div>
                    <div style={{marginTop:10}}><b>请假类型：</b>{value.type}</div>
                    <div style={{marginTop:10}}><b>提交人：</b>{value.name}{' '}{value.student_id}</div>
                    <div style={{marginTop:10,marginBottom:10}}><b>请假理由详情：</b>{value.reason}</div>
                </Card.Body>
                <Card.Footer content="提交时间: 2023-05-24 23:15:00"/>
            </Card>
        ))}
      </WingBlank>

    </div>
  )
}

export default Approval;
