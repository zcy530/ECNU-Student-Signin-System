import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Card, Icon, Button, WingBlank, WhiteSpace } from 'antd-mobile-v2'
import './index.scss'
import touxiang from '../../assets/zhangcaiyi.png'

const Approval = () => {
  const history = useHistory();

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
        <Card>
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

        <Card style={{marginTop:15}}>
            <Card.Header
                style={{backgroundColor:'rgb(227, 239, 247)'}}
                title="数据分析请假"
                extra={<span style={{color:'red'}}>驳回</span>}
            />
            <Card.Body>
                <div><b>请假时间：</b>2023-05-30</div>
                <div style={{marginTop:10}}><b>请假类型：</b>病假</div>
                <div style={{marginTop:10}}><b>提交人：</b>张彩仪</div>
                <div style={{marginTop:10,marginBottom:10}}><b>请假理由详情：</b>今天身体不舒服，去医院检查，特此请假，希望通过！</div>
            </Card.Body>
            <Card.Footer content="提交时间: 2023-05-24 23:15:00"/>
        </Card>

        <Card style={{marginTop:15}}>
            <Card.Header
                style={{backgroundColor:'rgb(227, 239, 247)'}}
                title="网球请假"
                extra={<span style={{color:'green'}}>审批通过</span>}
            />
            <Card.Body>
                <div><b>请假时间：</b>2023-05-30</div>
                <div style={{marginTop:10}}><b>请假类型：</b>病假</div>
                <div style={{marginTop:10}}><b>提交人：</b>张彩仪</div>
                <div style={{marginTop:10,marginBottom:10}}><b>请假理由详情：</b>今天身体不舒服，去医院检查，特此请假，希望通过！</div>
            </Card.Body>
            <Card.Footer content="提交时间: 2023-05-24 23:15:00"/>
        </Card>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/workstation')}>返回首页</Button>
      </WingBlank>

    </div>
  )
}

export default Approval;
