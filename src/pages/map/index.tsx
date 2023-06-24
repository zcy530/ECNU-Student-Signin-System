import React, { useEffect, Component } from 'react'
import './index.scss'
import { List, NavBar, Toast, WingBlank } from 'antd-mobile-v2'
import { Button,Icon } from 'antd-mobile-v2';
import Lottie from 'react-lottie'
import touxiang from '../../assets/lottie/login.json'
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment';

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

    getLocation() {
        // 获取当前定位城市--IP定位
        var myCity = new BMap.LocalCity();
        let _this = this;
        
        myCity.get(r => {
          console.log('经纬度信息',r)
      
          // 根据经纬度获取省和市
          var gc = new BMap.Geocoder();
          var pointAdd = new BMap.Point(r.center.lng, r.center.lat);
      
          gc.getLocation(pointAdd, function(rs) {
            //获取城市地址
            console.log('城市信息',rs);
          });
        });
      }

      getGeolocation() {
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r) {
            console.log('经纬度信息',r)
        });
      }

      getGeolocationSDK() {
        var geolocation = new BMap.Geolocation();
        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function(r) {
          console.log("经纬度信息sdk", r);
        });
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
            <text >经度：121.4132{' '}纬度：31.237</text>
            <div id="allmap" style={{height:280,borderRadius:10,marginTop:10}}></div>
            <div style={{marginBottom:20,fontWeight:'bold',fontSize:16,marginTop:20}}>我的定位</div>
            <text >经度：121.412{' '}纬度：31.236</text>
            <div id="allmap2" style={{height:280,borderRadius:10,marginTop:10}}></div>
            
            <Button type='ghost' style={{marginTop:15}} onClick={()=>{
                this.getLocation();
                this.getGeolocation();
                this.getGeolocationSDK();
                }}>获取定位</Button>
            <Button type='ghost' style={{marginTop:15}} onClick={()=>{
                    fetch(`http://8.130.86.79:8072/office-service/student/info?studentId=10205101485`, {
                        method: 'GET',
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8'
                        },
                      })
                      .then(response => response.json())
                      .then((value)=> {
                        var locationSigin = {
                            "roll_call_record_id": 2345,
                            "student_id": 10205101485,
                            "status": "normal",
                            "time": moment().format('YYYY-MM-DD HH:mm:ss')
                        }
                        var mydata;
                        try {
                            mydata = JSON.stringify(locationSigin)
                        } catch(e) {
                            console.log(e)
                        }
                        fetch(`http://8.130.86.79:8072/signin-service/student/sign`, {
                            method: 'POST',
                            headers: {
                              'Content-type': 'application/json; charset=UTF-8'
                            },
                            body: mydata
                          })
                          .then(response => response.json())
                          .then((value)=> {
                            console.log(value);
                          })
                      }).catch((e)=>
                        console.log(e))
                      
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
