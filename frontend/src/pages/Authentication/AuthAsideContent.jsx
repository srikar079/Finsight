import { twMerge } from "tailwind-merge";

const AuthAsideContent = ({ img, className }) => {
  return (
    <div
      className={twMerge(
        `${img}  bg-no-repeat hidden md:flex text-center bg-center justify-center items-center`,
        className
      )}
    ></div>
  );
};

export default AuthAsideContent;
