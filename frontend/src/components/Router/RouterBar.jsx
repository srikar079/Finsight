import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import MissingPage from "../../pages/MissingPage";
import PageTitle from "../PageTitle.jsx";
import UseRoutesContainer from "./UseRoutesContainer";
import PrivateRoutes from "./PrivateRoutes";
import { AnimatePresence } from "framer-motion";
const RouterBar = () => {
  const { publicRoutes, privateRoutes } = UseRoutesContainer();
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Finsight | Landing Page" />
              <Navigate to="/finsight/landging_page" replace="true" />
            </>
          }
        />
        {publicRoutes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <>
                <PageTitle title={route.PageTitle} />
                {route.element}
              </>
            }
          />
        ))}
        <Route element={<PrivateRoutes />}>
          {privateRoutes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              element={
                <>
                  <PageTitle title={route.PageTitle} />
                  {route.element}
                </>
              }
            />
          ))}
        </Route>
        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 page Not Found" />
              <MissingPage />
            </>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default RouterBar;
