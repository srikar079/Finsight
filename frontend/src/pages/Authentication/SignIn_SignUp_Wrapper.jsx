import { NavigateBTN } from "./AuthContainer";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const SignIn_SignUp_Wrapper = ({ className, children, goto, txt }) => {
  return (
    <motion.div
      className={twMerge(
        "grid place-items-center mixin/my:my-0 shadow-md mixin/m:my-5 p-3 md:p-4 xl:p-8 overflow-hidden",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="rounded-md h-fit w-full overflow-hidden"
        initial={{ x: "100%" }}
        animate={{ x: "0%", transition: { duration: 0.6, ease: "easeOut" } }}
        exit={{ x: "100%", transition: { duration: 0.3 } }}
      >
        {children}
        <NavigateBTN txt={txt} goto={goto} />
      </motion.div>
    </motion.div>
  );
};

SignIn_SignUp_Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  goto: PropTypes.string,
  txt: PropTypes.string,
};
export default SignIn_SignUp_Wrapper;
