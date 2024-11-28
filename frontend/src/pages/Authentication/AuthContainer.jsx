import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { Btn } from "@/utils/utils";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AuthAsideContent from "./AuthAsideContent";
const AuthContainer = ({ className, img, SignIn_SignUp_Wrapper }) => {
  return (
    <motion.div
      className={twMerge(
        "grid md:grid-cols-2 h-dvh overflow-hidden",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AuthAsideContent img={img} />
      {SignIn_SignUp_Wrapper}
    </motion.div>
  );
};
AuthContainer.propTypes = {
  SignIn_SignUp_Wrapper: PropTypes.node,
  img: PropTypes.string,
  className: PropTypes.string,
};

export const NavigateBTN = ({ txt, goto }) => {
  const navigate = useNavigate();
  return (
    <Btn
      type="button"
      txt={txt}
      className="w-full mt-4"
      onClick={() => navigate(goto)}
    />
  );
};

NavigateBTN.propTypes = {
  txt: PropTypes.string,
  goto: PropTypes.string,
};
export default AuthContainer;
