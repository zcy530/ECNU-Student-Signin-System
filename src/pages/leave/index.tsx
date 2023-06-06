import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Picker, Icon, Button, WingBlank, DatePicker, List, TextareaItem, WhiteSpace, Flex } from 'antd-mobile-v2'
import './index.scss'
import { course, mockCourses } from '../home/mockData'
import axios from 'axios'

const LeaveRequest = () => {
  const history = useHistory();
  const [studentId, setStudentId] = useState(10205101485);
  const [courseId, setCourseId] = useState('请选择课程代码');
  const [courseName, setCourseName] = useState('请选择课程名称');
  const [week, setWeek] = useState('请选择请假课时');
  const [term, setTerm] = useState('请选择学期');
  const [professor, setProfessor] = useState('请选择开课老师');
  const [leaveReason, setLeaveReason] = useState('请输入请假理由');
  const [createTime, setCreateTime] = useState(new Date());

  // useEffect(() => {

  //   const leaveInfo = {
  //     "student_id": 10205101485,
  //     "course_id": courseId,
  //     "week": 11,
  //     "reason": leaveReason,
  //     "term": term,
  //     "professor_id": 5101485,
  //     "time": "2022-10-11 17:45:01"
  //   }

  //   const config = {
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //       "Access-Control-Allow-Origin":"*",
  //       "Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"
  //     }
  //   };

  //   const getExamPaper = async() => {
  //       const { data } = await axios.get('http://8.130.86.79:8072/leave-service/leave/info?noteId=10005',config);
  //       console.log(data.result)
  //   }
  //   getExamPaper();
  // },[])
  
  const submitHandler = async() => {

    const leaveInfo = {
      "student_id": 10205101485,
      "course_id": "sei-gjbc",
      "week": 2,
      "reason": "exercitation",
      "term": "2023年春季学期",
      "professor_id": 5101485,
      "time": "2022-10-11 17:45:01"
  }

    console.log(leaveInfo)
    fetch('http://8.130.86.79:8072/leave-service/student/askforleave', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Methods":"POST, GET, PUT, OPTIONS, DELETE"
      },
      body: JSON.stringify(leaveInfo)
    }).then((res)=> {
      console.log(res);
    })
  }

  const course2 = [
    [
      {
        label: 'sei-gjbc',
        value: 'sei-gjbc',
      },
      {
        label: 'sei-czxt',
        value: 'sei-czxt',
      },
    ]
  ];

  const courseIdList = mockCourses.map((course:course,i)=>{
    return {
      label: course.courseId,
      value: course.courseId,
    }
  })

  const courseNameList = [
    [
      {
        label: '操作系统',
        value: '操作系统',
      },
      {
        label: '高级编程',
        value: '高级编程',
      },
      {
        label: 'JavaEE',
        value: 'JavaEE',
      },
      {
        label: '计算机网络',
        value: '计算机网络',
      },
    ]
  ];

  const termList = [
    [
      {
        label: '2019年',
        value: '2019年',
      },
      {
        label: '2020年',
        value: '2020年',
      },
      {
        label: '2021年',
        value: '2021年',
      },
      {
        label: '2022年',
        value: '2022年',
      },
      {
        label: '2023年',
        value: '2023年',
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
    ],
  ];

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
      }
    ]
  ];

  const professorList = [
    [
      {
        label: '陈良育',
        value: '陈良育',
      },
      {
        label: '曹桂涛',
        value: '曹桂涛',
      },
      {
        label: '张敏',
        value: '张敏',
      },
      {
        label: '王廷',
        value: '王廷',
      }
    ]
  ];

  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/workstation')}>
            请假申请
      </NavBar>

      <WingBlank style={{marginTop:20,flexBasis:'initial'}}>
        <Picker
          data={termList}
          title="学期"
          cascade={false}
          onChange={(value)=>setTerm(value!.toString().replace(',',''))}
          extra={term} >
          <List.Item arrow="horizontal" className='item-list-first'>学期</List.Item>
        </Picker>
        <Picker 
          data={course2}
          title="课程代码"
          cascade={false}
          onChange={(value)=>setCourseId(value!.toString())}
          extra={courseId} >
          <List.Item arrow="horizontal" className='item-list'>课程代码</List.Item>
        </Picker>
        <Picker 
          data={courseNameList}
          title="课程名称"
          cascade={false}
          onChange={(value)=>setCourseName(value!.toString())}
          extra={courseName} >
          <List.Item arrow="horizontal" className='item-list'>课程名称</List.Item>
        </Picker>
        <Picker 
          data={weekList}
          title="课时"
          cascade={false}
          onChange={(value)=>setWeek(value!.toString())}
          extra={week} >
          <List.Item arrow="horizontal" className='item-list'>课时</List.Item>
        </Picker>
        <Picker 
          data={professorList}
          title="请假教师"
          cascade={false}
          onChange={(value)=>{setProfessor(value!.toString())}}
          extra={professor} >
          <List.Item arrow="horizontal" className='item-list-last'>开课教师</List.Item>
        </Picker>
        {/* <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={new Date(Date.now())}
          onChange={(value)=>{console.log(value.toString().split(' '))}}
        >
          <List.Item arrow="horizontal" className='item-list-last'>请假时间</List.Item>
        </DatePicker> */}

        <WhiteSpace size="lg"/>

        <div style={{backgroundColor:'rgb(255,255,255)',borderRadius:10,height:250,paddingTop:3,paddingBottom:20}}>
        <div style={{marginBottom:0,marginTop:20,fontSize:'17px',marginLeft:14}}>请假理由详情</div>
        <TextareaItem
            autoHeight
            rows={5}
            labelNumber={5}
            count={100}
            placeholder={leaveReason}
            onChange={(value)=>setLeaveReason(value!.toString())}
          />
        </div>
        <Button type="ghost" style={{marginTop:30}} onClick={()=>submitHandler()}>提交{term}</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/workstation')}>返回首页</Button>
      </WingBlank>

    </div>
  )
}

export default LeaveRequest;
