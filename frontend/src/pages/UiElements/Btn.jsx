import React from "react";
import { Button } from "@/components/ui/button";
import PropTypes from "prop-types";
const Btn = React.forwardRef(({ children, icon, label, ...props }, ref) => {
  return (
    <>
      <Button ref={ref} {...props}>
        {icon && icon}
        {children}
        {label}
      </Button>
    </>
  );
});

Btn.displayName = "Btn";
Btn.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
};

export default Btn;
