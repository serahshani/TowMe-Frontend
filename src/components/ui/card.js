"use client";

import React from "react";
import PropTypes from "prop-types";

export function Card({ children, className = "", style = {}, ...props }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-6 ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`space-y-3 ${className}`}>{children}</div>;
}

// ✅ Optional PropTypes
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Optional: if you want default import
// export default Card;
export default Card;