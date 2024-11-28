import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import React from "react";
import UseIconsPack from "./UseIconsPack";

/* Dynamic Icon Component */
export const Icons = React.forwardRef(({ Icon, className, ...rest }, ref) => {
  if (Icon == null || Icon == undefined) {
    return;
  }
  return <Icon ref={ref} className={twMerge("w-5 h-5", className)} {...rest} />;
});
Icons.displayName = "Icons";
Icons.propTypes = {
  Icon: PropTypes.any.isRequired,
  className: PropTypes.string,
};

/** Dynamic Button */
export const Btn = ({
  className,
  txt,
  type,
  onClick,
  disabled,
  children,
  style,
}) => {
  return (
    <Button
      type={type}
      className={twMerge("select-none transition-all duration-300", className)}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
      {txt}
    </Button>
  );
};
Btn.propTypes = {
  className: PropTypes.string,
  txt: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.any,
  children: PropTypes.any,
  style: PropTypes.any,
};

/** Spinner */
export const Spinner = ({ className }) => {
  const { LoaderCircle } = UseIconsPack();
  return <LoaderCircle className={twMerge("animate-spin", className)} />;
};
Spinner.propTypes = {
  className: PropTypes.string,
};

/** Loader */
export const Loader = ({ className, w, h }) => {
  return (
    <div
      className={twMerge(
        `" grid h-screen items-center justify-center bg-white"`,
        className
      )}
    >
      <div
        className={twMerge(
          "h-16 w-16 animate-spin rounded-full border-4 border-solid border-black-2 border-t-transparent",
          w,
          h
        )}
      ></div>
    </div>
  );
};
