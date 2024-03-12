import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from'./Clock';
import Earthworm from"./Earthworm";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // 처음 화면 구성 
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <React.StrictMode>
    <Earthworm />
  </React.StrictMode>
)

// Clock.js 렌더링
// setInterval(()=>{
//   // 브라우저 전체가 아닌 "시간" 부분만 새로고침 되고 있다. 
//   // react의 Virtual Dom은 내용이 변경된 부분만 업데이트한다. 
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   )
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
