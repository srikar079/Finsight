import { useLocation } from "react-router-dom";

export const useQuery = (key) => {
  const searchParams = new URLSearchParams(useLocation().search);
  const value = searchParams.get(key);
  return value;
};
