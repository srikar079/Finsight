import { useState, useEffect } from "react";
const useLocalStorage = (key, initialValue) => {
  const getStoredValue = () => {
    try {
      const storedItem = localStorage.getItem(key);
      return storedItem ? JSON.parse(storedItem) : initialValue;
    } catch (error) {
      console.error("Error parsing localStorage item:", error);
      return initialValue;
    }
  };
  const [storedValue, setStoredValue] = useState(getStoredValue);
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
};
export default useLocalStorage;
