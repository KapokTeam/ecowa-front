import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/globals/Index/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GA4React from 'react-ga4';

const trackingId = 'G-YPGMLSED5Y'; // 실제 추적 ID로 대체해주세요

// 개발 환경에서는 GA를 비활성화하고, 프로덕션 환경에서만 활성화합니다.
const gaInstance =
  process.env.NODE_ENV === 'production' ? new GA4React(trackingId) : null;

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
};

const initializeGA = async () => {
  if (!gaInstance) {
    console.log('GA tracking disabled in development environment');
    renderApp();
    return;
  }

  try {
    await gaInstance.initialize();
    renderApp();
  } catch (err) {
    console.error('Google Analytics failed to initialize:', err);
    renderApp();
  }
};

initializeGA();

// 웹사이트에 대한 성능 측정을 시작하려면 함수에 결과를 기록하십시오.
// (예: reportWebVitals(console.log))
// 또는 분석 엔드포인트로 보내기. 자세한 내용: https://bit.ly/CRA-vitals