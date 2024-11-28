import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RouterBar from "./components/Router/RouterBar.jsx";
import LoggedInUserProvider from "./hooks/LoggedInUserProvider.jsx";
import { Loader } from "./utils/utils.jsx";
import { Toast } from "./utils/Toast.jsx";
const App = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Toast />
      <LoggedInUserProvider>
        <RouterBar />
      </LoggedInUserProvider>
    </>
  );
};
export default App;
