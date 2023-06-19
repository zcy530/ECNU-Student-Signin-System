import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Card, Icon, Button, WingBlank, WhiteSpace, Picker, List } from 'antd-mobile-v2'
import './index.scss'

export type leave = {
  noteId: number;
  courseName: string;
  week: number;
  reason: string;
  time: string;
  status: number;
  term: string;
  name: string | null;
  refuseReason: string | null;
  type: string | null;
  changeTime: string | null;
  id: number | null;
  student_id: number;
  course_id: string;
  course_name: string;
  professor_id: number;
  professorName: string;
}


const Approval = () => {
  const history = useHistory();
  const [term, setTerm] = useState<string>('2023年春季学期');
  const [leaveInfo, setLeaveInfo] = useState<leave[]>([]);

  const leaveStatus = ['待审批','已通过','已提交'];

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

  useEffect(() => {
    fetch(`http://8.130.86.79:8072/leave-service/student/leaverecord?studentId=10205101485&term=${term}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then((value)=> {
      setLeaveInfo(value);
      console.log(leaveInfo)
    })
  },[term])

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
        <Picker
          data={termList}
          title="学期"
          cascade={false}
          onChange={(value)=>setTerm(value!.toString().replace(',',''))}
          extra={term} >
            <List.Item arrow="horizontal" className='item-list-home'>学期</List.Item>
        </Picker>
        {leaveInfo.map((value:leave,i)=>(

            <Card className='leave-card' onClick={()=>{
              history.push({
                pathname:'/progress',
                state:{
                  id:value.noteId
                }
              });
              console.log(leaveInfo)
              }}>
                <Card.Header
                    className='leave-card-head'
                    title={value.courseName + '课程请假'}
                    extra={<span style={{color:'blue'}}>待审批</span>}
                />
                <Card.Body>
                    <div><b>请假课时：</b>第{value.week}周</div>
                    <div style={{marginTop:10}}><b>审核状态：</b>{leaveStatus[value.status]}</div>
                    <div style={{marginTop:10}}><b>课程代码：</b>{value.course_id}</div>
                    <div style={{marginTop:10}}><b>提交人：</b>{value.name}{' '}{value.student_id}</div>
                    <div style={{marginTop:10}}><b>开课老师：</b>{value.professorName}{' '}{value.professor_id}</div>
                    <div style={{marginTop:10}}><b>请假理由详情：</b>{value.reason}</div>
                    <div style={{marginTop:10,marginBottom:10}}><b>提交时间：</b>{value.time}</div>
                </Card.Body>
                <Card.Footer content={"修改时间"+value.changeTime}/>
            </Card>
        ))}
        <WhiteSpace size='lg'></WhiteSpace>
      </WingBlank>

    </div>
  )
}

export default Approval;
