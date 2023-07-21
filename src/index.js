import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/globals/Index/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

// 웹사이트에 대한 성능 측정을 시작하려면 함수에 결과를 기록하십시오.
// (예: reportWebVitals(console.log))
// 또는 분석 엔드포인트로 보내기. 자세한 내용: https://bit.ly/CRA-vitals
