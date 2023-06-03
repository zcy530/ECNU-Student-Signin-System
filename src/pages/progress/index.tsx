import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Card, Steps, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile-v2'
import './index.scss'

const Progress = () => {
  const history = useHistory();
  const Step = Steps.Step;
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
        onLeftClick={() => history.push('/home')}>
            请假详情
      </NavBar>


      <WingBlank style={{marginTop:30}}>
        
        <Card style={{marginBottom:40}}>
            <Card.Header
                style={{backgroundColor:'rgb(227, 239, 247)'}}
                title="软件需求请假"
                extra={<span style={{color:'blue'}}>待审批</span>}
            />
            <Card.Body>
                <div><b>请假时间：</b>2023-05-30</div>
                <div style={{marginTop:10}}><b>请假类型：</b>病假</div>
                <div style={{marginTop:10}}><b>提交人：</b>张彩仪</div>
                <div style={{marginTop:10,marginBottom:10}}><b>请假理由详情：</b>今天身体不舒服，去医院检查，特此请假，希望通过！</div>
            </Card.Body>
            <Card.Footer content="提交时间: 2023-05-24 23:15:00"/>
        </Card>
        <Steps current={2} direction="horizontal">{steps}</Steps>
        <Button type="ghost" style={{marginTop:60}} onClick={()=>history.push('/home')}>撤回申请</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/home')}>返回课程表</Button>
      </WingBlank>

    </div>
  )
}

export default Progress;
