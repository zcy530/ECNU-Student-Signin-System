import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Picker, Icon, Button, WingBlank, List, TextareaItem, WhiteSpace, Flex, InputItem } from 'antd-mobile-v2'
import './index.scss'
import { course, mockCourses } from '../home/mockData'
import axios from 'axios'
import moment from 'moment';

const LeaveRequest = () => {
  const history = useHistory();
  const [studentId, setStudentId] = useState(10205101485);
  const [courseId, setCourseId] = useState('请选择课程代码');
  const [courseName, setCourseName] = useState('请选择课程名称');
  const [week, setWeek] = useState('请选择请假课时');
  const [term, setTerm] = useState('请选择学期');
  const [professor, setProfessor] = useState('请选择开课老师');
  const [professorId, setProfessorId] = useState('教师代码');
  const [leaveReason, setLeaveReason] = useState('请输入请假理由');
  const [createTime, setCreateTime] = useState(new Date());

  const [courses, setCourses] = useState<course[]>([]);
  
  useEffect(() => {
    fetch(`http://8.130.86.79:8072/account-service/account/student/curriculum?studentId=10205101485&term=2023年春季学期`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then((value)=> {
      setCourses(value)
    })
  },[term])

  const submitHandler = async() => {

    const leaveInfo = {
      "student_id": 10205101485,
      "course_id": courseId,
      "week": parseInt(week.charAt(1)),
      "reason": leaveReason,
      "term": term,
      "professor_id": professorId,
      "time": moment().format('YYYY-MM-DD HH:mm:ss')
    }
    fetch('http://8.130.86.79:8072/leave-service/student/askforleave', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(leaveInfo)
    })
    .then(response => response.json())
    .then((value)=> {
      console.log(value);
      history.push('/workstation')
    })
  }

  const getCourseInfoHandler = (id) => {
    fetch(`http://8.130.86.79:8072/office-service/course/teached?studentId=10205101485&term=${term}&courseId=${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then((value)=> {
      setProfessor(value.name);
      setProfessorId(value.professor_id)
      console.log(value);
    })
  }

  const getCourseNameHandler = (id) => {
    fetch(`http://8.130.86.79:8072/office-service/course/info?courseId=${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then((value)=> {
      console.log(value)
      setCourseName(value.name);
    })
  }

  const courseIdList = courses.map((course:course,i)=>{
    return {
      label: course.courseId.toString(),
      value: course.courseId.toString(),
    }
  })

  const courseNameList = courses.map((course:course,i)=>{
    return {
      label: course.name.toString(),
      value: course.name.toString(),
    }
  })

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
          data={[courseIdList]}
          title="课程代码"
          cascade={false}
          onChange={(value)=>{
            setCourseId(value!.toString());
            getCourseInfoHandler(value!.toString());
            getCourseNameHandler(value!.toString());
          }}
          extra={courseId} >
          <List.Item arrow="horizontal" className='item-list'>课程代码</List.Item>
        </Picker>
        <Picker 
          data={[courseNameList]}
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
          <List.Item arrow="horizontal" className='item-list'>开课教师</List.Item>
        </Picker>
        <Picker 
          data={professorList}
          title="教师代码"
          cascade={false}
          onChange={(value)=>{setProfessorId(value!.toString())}}
          extra={professorId} >
          <List.Item arrow="horizontal" className='item-list-last'>教师代码</List.Item>
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
        <Button type="ghost" style={{marginTop:30}} onClick={()=>submitHandler()}>提交</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/workstation')}>返回首页</Button>
      </WingBlank>

    </div>
  )
}

export default LeaveRequest;
