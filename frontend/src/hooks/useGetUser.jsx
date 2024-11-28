import { useContext } from "react";
import LoggedInUser from "./LoggedInUser";
const useGetUser = () => {
  const context = useContext(LoggedInUser);
  const { user, setUser } = context;
  return { user, setUser };
};

export default useGetUser;
