import React, { useEffect, useState } from 'react'
import './index.scss'
import { List, WingBlank } from 'antd-mobile-v2'
import Logo from '@/components/logo';
import { Button } from 'antd-mobile-v2';
import Lottie from 'react-lottie'
import touxiang from '../../assets/lottie/Designer.json'
import { useHistory } from 'react-router-dom';

function Me() {
  const history = useHistory();
  const Item = List.Item;

  const [name, setName] = useState<string>('');
  const [studentId, setStudentId] = useState<number>(0);
  const [school, setSchool] = useState<string>('');
  const [college, setCollege] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [classs, setClasss] = useState<string>('');


  const Options = {
    loop: true,
    autoplay: true,
    animationData: touxiang,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  useEffect(() => {
    fetch(`http://8.130.86.79:8072/office-service/student/info?studentId=10205101485`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
    })
    .then(response => response.json())
    .then((value)=> {
      setName(value.stuname);
      setStudentId(value.studentId);
      setSchool(value.department);
      setCollege(value.major);
      setGrade(value.year);
      setClasss(value.classes);
    })
  })

  return (
    <div style={{paddingBottom:50}}>
      <div >
      <div className="me-page">
        <div style={{ marginTop: '0.5rem' }}>
         <Lottie options={Options} height={250} width={250}/>
        </div>
        <div className="title">我的信息</div>
      </div>
      <WingBlank>
      
        <Item extra={name} className='item-list-first'>姓名</Item>
        <Item extra={studentId} className='item-list'>学号</Item>
        <Item extra={school} className='item-list'>学院</Item>
        <Item extra={college} className='item-list'>专业</Item>
        <Item extra={grade} className='item-list'>年级</Item>
        <Item extra={classs} className='item-list-last'>班级</Item>
    
    </WingBlank>

      <WingBlank style={{marginBottom:20}}>
        <Button type="ghost" style={{marginTop:15}} onClick={()=> history.push('/login')}>退出登陆</Button>
      </WingBlank>
      </div>
    </div>
  )
}

export default Me
