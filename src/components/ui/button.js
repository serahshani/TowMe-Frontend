"use client";

import React from "react";
import PropTypes from "prop-types";

export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// ✅ Optional PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
export default Button;