import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar, Picker, PickerView, Icon, Button, WingBlank, DatePicker, List, InputItem, TextareaItem, WhiteSpace } from 'antd-mobile-v2'
import './index.scss'

const LeaveRequest = () => {
  const history = useHistory();

  const course = [
    [
      {
        label: 'SE123344',
        value: 'SE123344',
      },
      {
        label: 'SE324346',
        value: 'SE324346',
      },
    ]
  ];

  const courseName = [
    [
      {
        label: '操作系统',
        value: '1',
      },
      {
        label: '面向对象实践',
        value: '2',
      },
      {
        label: 'JavaEE',
        value: '3',
      },
      {
        label: '计算机网络',
        value: '4',
      },
    ]
  ];

  const reason = [
    [
      {
        label: '病假',
        value: '1',
      },
      {
        label: '事假',
        value: '2',
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

      <WingBlank style={{marginTop:20}}>
        
        <Picker 
          data={course}
          title="课程代码"
          cascade={false}
          extra="请选择课程代码" >
          <List.Item arrow="horizontal" className='item-list-first'>课程代码</List.Item>
        </Picker>
        <Picker 
          data={courseName}
          title="课程名称"
          cascade={false}
          extra="请选择课程名称" >
          <List.Item arrow="horizontal" className='item-list'>课程名称</List.Item>
        </Picker>
        <Picker 
          data={reason}
          title="请假类型"
          cascade={false}
          extra="请假类型选择" >
          <List.Item arrow="horizontal" className='item-list'>请假类型</List.Item>
        </Picker>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={new Date(Date.now())}
        >
          <List.Item arrow="horizontal" className='item-list-last'>请假时间</List.Item>
        </DatePicker>

        <WhiteSpace size="lg" />
        <TextareaItem
            title={'请假理由'}
            autoHeight
            rows={5}
            labelNumber={5}
            count={100}
            placeholder="请输入请假理由"
          />
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/workstation')}>提交</Button>
        <Button type="ghost" style={{marginTop:15}} onClick={()=>history.push('/workstation')}>返回首页</Button>
      </WingBlank>

    </div>
  )
}

export default LeaveRequest;
