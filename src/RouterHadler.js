import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouterHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const gaInstance = window.gtag;

    if (gaInstance) {
      console.log('Google Analytics initialized');
      const trackingId = 'G-YPGMLSED5Y'; // 실제 추적 ID로 대체해주세요
      gaInstance('config', trackingId, {
        page_path: location.pathname + location.search,
      });
    } else {
      console.log('Google Analytics not initialized');
    }
  }, [location]);

  return null;
};

export default RouterHandler;
