import React, { useEffect, Component } from 'react'
import './index.scss'
import { List, NavBar, WingBlank } from 'antd-mobile-v2'
import { Button,Icon } from 'antd-mobile-v2';
import Lottie from 'react-lottie'
import touxiang from '../../assets/lottie/login.json'
import { useHistory } from 'react-router-dom';

let win:any = window
let BMap = win.BMap;

class MyMap extends Component  {

    bmap;
    componentDidMount(){
       this.bmap = new BMap.Map("allmap");
       this.bmap.centerAndZoom(new BMap.Point(121.4132, 31.236),18)
        
    }
    render() {
        return(
        <div>
            <NavBar
                mode="light"
                height={300}
                icon={<Icon type="left" />}>
                    定位签到
            </NavBar>
            <div id="allmap" style={{height:800}}></div>
            <WingBlank>
                {/* <Button>确认签到</Button> */}
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
