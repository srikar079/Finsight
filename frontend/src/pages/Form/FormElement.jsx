import React from "react";
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";
import { Icons } from "@/utils/utils";
import UseIconsPack from "@/utils/UseIconsPack";

/* Form Container */
export const Form = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <form className={twMerge("", className)} ref={ref} {...props}>
        {children}
      </form>
    );
  }
);
Form.displayName = Form;

Form.propTypes = {
  children: PropTypes.any,
};

/* Form Group Container */
export const FormGroup = ({
  children,
  className,
  Icon,
  label,
  errfield,
  value,
}) => {
  return (
    <div className={twMerge("relative w-full select-none my-8", className)}>
      <label className="" htmlFor={label}>
        {label}
      </label>
      <div className="bg-gentle my-1 relative flex items-center">
        <span className="absolute flex px-1">
          <Icons Icon={Icon} />
        </span>
        {children}
        {showFeedBackIcon(errfield, value)}
      </div>
      <div className="relative h-fit">{displayErrorMsg(errfield)}</div>
    </div>
  );
};
FormGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  Icon: PropTypes.any,
  label: PropTypes.string,
  errfield: PropTypes.object,
  value: PropTypes.string,
};

export function showFeedBackIcon(field, value) {
  const { CheckCheck, ShieldAlert } = UseIconsPack();
  return (
    <span className="absolute right-0 flex px-1 top[50%]">
      {!field?.message && value && value?.length > 0 ? (
        <Icons className="text-green-500" Icon={CheckCheck} />
      ) : (
        field?.message && <Icons className="text-red-500" Icon={ShieldAlert} />
      )}
    </span>
  );
}

/* Display Error Message */
function displayErrorMsg(field) {
  return (
    <>
      {field?.message && (
        <p className="absolute text-red-500">{field.message}</p>
      )}
    </>
  );
}

/** Display Border State based on the form validation requirements */
export const validateBorderState = (errors, value) => {
  if (value && !errors?.message && value?.length > 0) {
    return "!border-green-500";
  }
  if (errors?.message) {
    return "!border-red-500";
  }
};
