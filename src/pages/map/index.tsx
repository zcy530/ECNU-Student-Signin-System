import React, { useEffect, Component } from 'react'
import './index.scss'
import { List, NavBar, Toast, WingBlank } from 'antd-mobile-v2'
import { Button,Icon } from 'antd-mobile-v2';
import Lottie from 'react-lottie'
import touxiang from '../../assets/lottie/login.json'
import { Link, useHistory } from 'react-router-dom';

let win:any = window
let BMap = win.BMap;

class MyMap extends Component  {

    bmap;
    bmap2;
    componentDidMount(){
       this.bmap = new BMap.Map("allmap");
       this.bmap.centerAndZoom(new BMap.Point(121.4132, 31.237),18)

       this.bmap2 = new BMap.Map("allmap2");
       this.bmap2.centerAndZoom(new BMap.Point(121.4132, 31.237),18)

       const label = new BMap.Label('教室发起签到位置', {
        position: new BMap.Point(121.4132, 31.236),
        offset: new BMap.Size(-20, -110)
      })

      label.setContent(`
      <div style={{height:80,width:80,backgroundColor:'rgb(86, 201, 255)',borderRadius:40}}><Link to='/home'>教室发起签到位置</Link></div>`)
      label.addEventListener('click', () => {
        // 调用 renderOverlays 方法，获取该区域下的房源数据
        console.log('1234')
      })
  
      this.bmap.addOverlay(label)

      const label2 = new BMap.Label('我现在的位置', {
        position: new BMap.Point(121.4132, 31.2364),
        offset: new BMap.Size(-20, -110)
      })

      label2.setContent(`
      <div style={{height:80,width:80,backgroundColor:'rgb(86, 201, 255)',borderRadius:40}}><Link to='/home'>我的位置</Link></div>`)
      label2.addEventListener('click', () => {
        // 调用 renderOverlays 方法，获取该区域下的房源数据
        console.log('12346')
      })
  
      this.bmap2.addOverlay(label2)
    }



    render() {
        return(
        <div style={{paddingBottom:60}}>
            <NavBar
                mode="light"
                height={300}
                icon={<Icon type="left" />}>
                    定位签到
            </NavBar>
            <WingBlank>
            <div style={{marginBottom:20,fontWeight:'bold',fontSize:16,marginTop:20}}>发起签到定位</div>
            <div id="allmap" style={{height:280,borderRadius:10}}></div>
            <div style={{marginBottom:20,fontWeight:'bold',fontSize:16,marginTop:20}}>我的定位</div>
            <div id="allmap2" style={{height:280,borderRadius:10}}></div>
                
                {/* <Button>确认签到</Button> */}
            <Button type='ghost' style={{marginTop:15}} onClick={()=>{
                setTimeout(() => {
                    Toast.success('签到成功！', 2);
                    }, 1000);
            }}><Link to='/home'>确认签到</Link></Button> 
            </WingBlank>
            
        </div>

        )
    }
}

export default MyMap

// function Map() {
//   const history = useHistory();
//   const win:any = window
//   const BMap = win.BMap;
//   var map = new BMap.Map("allmap"); 
//   var point = new BMap.Point(116.404, 39.915); 
//   var myGeo = new BMap.Geocoder();

//   useEffect(() => {
//     setTimeout(() => {
//         map.centerAndZoom(point, 15);
//       }, 5000);
//     console.log(map)
    
//   },[])

//   return (
//     <div id="allmap">
//       {/* <NavBar
//         mode="light"
//         height={300}
//         icon={<Icon type="left" />}
//         onLeftClick={() => history.push('/home')}>
//             定位签到
//       </NavBar>
//       <WingBlank>
//         <Button onClick={()=>{
//             history.goBack()
//             // myGeo.getPoint('北京市海淀区上地10街10号', (point) => {
//             //     if (point) {
//             //         console.log(point); // {lat: 40.057339, lng: 116.306941}
//             //     } else {
//             //         console.log('解析失败');
//             //     }
//             //     }, '北京市');

//         }}>点击</Button>
//         <div id="map" style={{height:100}} >

//         </div>
//       </WingBlank> */}
//     </div>
//   )
// }

// export default Map
