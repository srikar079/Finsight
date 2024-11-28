import { useEffect } from "react";

const UsePreventBack = () => {
  useEffect(() => {
    const dashboardURL = "/finsight/dashboard";
    if (window.location.pathname === dashboardURL) {
      // Clear the history to prevent going back
      window.history.pushState(null, "", window.location.href);
      window.history.replaceState(null, "", window.location.href);
      // Function to handle the back button press
      const handlePopState = (event) => {
        event.preventDefault();
        window.history.pushState(null, "", window.location.href);
      };
      // Add event listener to prevent back navigation
      window.addEventListener("popstate", handlePopState);
      // Clean up the event listener when the component unmounts or location changes
      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, []);
  return null;
};

export default UsePreventBack;
