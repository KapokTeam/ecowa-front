import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GA4React } from "react-ga4";

const RouterHandler = () => {
  const location = useLocation();
  const gaInstance = GA4React.getGA4Instance();

  useEffect(() => {
    gaInstance.pageview(location.pathname + location.search);
  }, [location, gaInstance]);

  return null;
};

export default RouterHandler;