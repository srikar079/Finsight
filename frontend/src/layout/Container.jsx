import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
const Container = ({ children, className }) => {
  return (
    <div className={twMerge("px-4 md:px-6 lg:px-8", className)}>{children}</div>
  );
};
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default Container;
