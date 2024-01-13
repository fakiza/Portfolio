import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[30px]" };
const variants = {
  gradient: { cyan_600_deep_purple_300: "bg-gradient  text-white-A700" },
};
const sizes = { xs: "p-[15px]", sm: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["gradient"]),
  color: PropTypes.oneOf(["cyan_600_deep_purple_300"]),
};

export { Button };
