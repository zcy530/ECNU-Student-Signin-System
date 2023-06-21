import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar,NoticeBar, TextareaItem, Icon, Button, WingBlank, Carousel,WhiteSpace } from 'antd-mobile-v2'
import './index.scss'

const Warning = () => {
  const history = useHistory();
  const [data, setData] = useState(['计算机逻辑', 'JAVA基础', '云端计算']);
  const [imgHeight, setImgHeight] = useState<string|number>(300);
  const [slideIndex, setSlideIndex] = useState(0);
    
  return (
    <div>
      
      <NavBar
        mode="light"
        height={300}
        icon={<Icon type="left" />}
        onLeftClick={() => history.push('/workstation')}>
            缺课预警
      </NavBar>


      <WingBlank style={{marginTop:20}}>
        <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px',marginBottom:10 } }}>
            提示: 如果一门课缺课次数超过要求，可能会导致无法获得学分，进而无法毕业，请引起重视！
        </NoticeBar>
        <WhiteSpace size='lg'/>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          afterChange={index => setSlideIndex(index)}
        >
          {data.map((val, index) => (
            <div style={{backgroundColor:'rgb(255,255,255,0.7)',height:420,borderRadius:10,padding:20}}>
              <div style={{backgroundColor:'rgb(56, 155, 255)',borderRadius:60,height:100,width:100,paddingTop:40,paddingLeft:20,margin:'auto'}}>
                {val}
                </div>
              <div style={{marginTop:15,marginBottom:15,color:'red'}}><b>连续缺课2节(共18节)</b></div>
              <div style={{marginTop:15,marginBottom:15}}>有特殊情况吗？告诉我们:</div>
              <TextareaItem
                rows={5}
                placeholder="请输入理由..."
                clear
              />
              <Button type="ghost" style={{marginTop:17,marginBottom:15}}
              onClick={()=>{history.push('/workstation')}}>提交说明</Button>
            </div>
          ))}
        </Carousel>
        <Button type="ghost" style={{marginTop:15}}>返回首页</Button>
      </WingBlank>

    </div>
  )
}

export default Warning;
  function componentDidMount() {
    throw new Error('Function not implemented.');
  }

