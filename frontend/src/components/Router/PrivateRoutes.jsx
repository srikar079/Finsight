import useGetUser from "@/hooks/useGetUser";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const { user } = useGetUser();
  const token = user?.name;
  return token ? <div className="">{<Outlet />}</div> : <Navigate to="/" />;
};

export default PrivateRoutes;
