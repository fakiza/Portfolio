import React from "react";

const sizeClasses = {
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsSemiBold48: "font-poppins font-semibold",
  txtPoppinsSemiBold64: "font-poppins font-semibold",
  txtPoppinsSemiBold36Gray400: "font-poppins font-semibold",
  txtPoppinsSemiBold42: "font-poppins font-semibold",
  txtPoppinsMedium30: "font-medium font-poppins",
  txtPoppinsSemiBold28: "font-poppins font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
