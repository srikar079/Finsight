import { twMerge } from "tailwind-merge";

export const Columns = ({ className, children }) => {
  return (
    <div className={twMerge("grid md:grid-cols-2", className)}>{children}</div>
  );
};

export const DualColumns = ({ className, children }) => {
  return (
    <div className={twMerge("grid lg:grid-cols-2 gap-5", className)}>
      {children}
    </div>
  );
};
