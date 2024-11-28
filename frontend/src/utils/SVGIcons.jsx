import React from "react";
import { twMerge } from "tailwind-merge";

export const SVGIcons = React.forwardRef(
  (
    {
      className,
      type,
      children,
      txt,
      onClick,
      disabled,
      style,
      viewBox,
      name,
      width,
      height,
    },
    props,
  ) => {
    return (
      <div
        type={type}
        className={twMerge(
          "h-fit select-none rounded-md bg-transparent text-background !duration-500 hover:bg-background hover:text-primary",
          className,
        )}
        {...props}
        style={style}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width || "2em"}
          height={height || "2em"}
          viewBox={viewBox || "0 0 24 24"}
          name={name}
          onClick={onClick}
        >
          {children}
        </svg>
      </div>
    );
  },
);
SVGIcons.displayName = "SVGIcons";
