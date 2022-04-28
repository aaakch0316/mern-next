import React, { useState } from 'react';
import axios from 'axios';

// import { useDispatch } from 'react-redux';
// import { userActions } from '../../redux/reducers/userReducer.js';

export default function Test(){
    const proxy = 'https://dev.aistudios.com/api/odin'
    const headers = {                         // body의 payload 를 보안.
        "Content-Type": "application/json",
        // Authorization: "JWT fefege...",   // 여기 토큰 받아서 넣어주면된다. 로그인 되면 데체 된다.
        "Access-Control-Allow-Origin": "*"
        // "referer": "https://dev.aistudios.com/sdk/sample.aiacademy.html"
    }
    // const dispatch = useDispatch();
    const [gct, setGct] = useState('')
    const handleStart = () => {
        // let config = {
        //     appId: 'aistudios.com',
        //     userKey: '6443234b-77d5-4013-bfd6-bb9399f317d9',
        //     // clientHostname: 'aistudios.com',
        //     // onSynthesizing,
        //     // onSynthesisFinished
        // };
        // // axios.get(proxy+'/generateClientToken', config, {headers}) 
        // axios.get('https://dev.aistudios.com/api/odin/generateClientToken?appId=aistudios.com&userKey=6443234b-77d5-4013-bfd6-bb9399f317d9') 
        // .then((response) => {
        //     if(response.ok) {
        //       return response.json();
        //     }  
        //     throw new Error('Network response was not ok.');
        //   })
        // .then(res => {
        //     console.log(res.data)
        //     // setGct(res.data)
        // })
        // .catch(err => console.log(err))

        // axios.get("http://localhost:5000/api/now").then((res)=> {
        //     const data = res.data
        //     document.getElementById("timeZone").innerHTML = '<h1>현재시간 : ' + data.now + '</h1>'
        //   })
        // } else {
        //   document.getElementById("timeZone").innerHTML = '<h1>환영합니다: ' + user.name + '<h1>'
        // }

        axios.get('http://localhost:5000/basic/ai') 
        .then(res => {
            console.log(res.data)
            // setGct(res.data)
        })

        // var data = JSON.stringify({
        //     "appId": "www.tide.com",
        //     "platform": "web",
        //     "isClientToken": true,
        //     "uuid": "27644180-e97d-4a3d-8fd3-e2fa370ea878",
        //     "clientHostname": "localhost"
        //   });
          
        //   var config = {
        //     method: 'GET',
        //     url: 'https://dev.aistudios.com/api/odin/generateClientToken?appId=aistudios.com&userKey=6443234b-77d5-4013-bfd6-bb9399f317d9',
        //     headers: { 
        //     //   "Remote Address": "13.124.129.99:443",
        //     // "Referrer Policy": "strict-origin-when-cross-origin",
        //       "authority": "dev.aistudios.com",
        //       'Content-Type': 'application/json',
        //       "referer": "https://dev.aistudios.com/sdk/sample.aiacademy.html",
        //       "cookie": "_ga=GA1.2.1353881785.1650595538; ch-veil-id=edf3e9c3-00d4-41ea-9c6c-5456123e5513",
        //       "accept": "*/*",
        //       "accept-encoding": "gzip, deflate, br",
        //       "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        //       "strict-origin-when-cross-origin": "*",
        //       "Access-Control-Allow-Origin": "*",
        //     //   "Access-Control-Allow-Methods": "POST, GET, DELETE, PUT",
        //     //   "Access-Control-Max-Age": "3600",
        //     //   "Access-Control-Allow-Headers": "Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"
        //         // sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"
        //         // sec-ch-ua-mobile: ?0
        //         "sec-ch-ua-platform": "Windows",
        //         "sec-fetch-dest": "empty",
        //         "sec-fetch-mode": "cors",
        //         "sec-fetch-site": "same-origin",
        //         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36"
        //     },
        //     data : data
        //   };
          
        //   axios(config)
        //   .then(function (response) {
        //     console.log(JSON.stringify(response.data));
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
          
    }

    const onSynthesizing = function (result) {
        console.log('aistudios.onSynthesizing', result);
        document.getElementById('txt_result').innerHTML = JSON.stringify(result);
    }

    const onSynthesisFinished = function (result) {
        console.log('aistudios.onSynthesisFinished', result);
        document.getElementById('txt_result').innerHTML = '<a href="'+ result.video + '" target="_blank">' + JSON.stringify(result) + '</a>';
    }
    return (
        <>
            <button onClick={handleStart}>generateClientToken</button>
            <div>{gct}</div>
        </>
    )
}

    