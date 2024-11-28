import { useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";
import LoggedInUser from "./LoggedInUser";
const LoggedInUserProvider = ({ children }) => {
  const [LocalStorageValue] = useLocalStorage("user");
  const [user, setUser] = useState(LocalStorageValue || undefined);
  return (
    <LoggedInUser.Provider value={{ user, setUser }}>
      {children}
    </LoggedInUser.Provider>
  );
};
export default LoggedInUserProvider;
