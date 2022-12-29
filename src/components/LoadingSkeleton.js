import React from "react";
import "../assets/css/skeleton.css";

const LoadingSkeleton = ({ className = "" }) => {
  return <div className={`skeleton ${className}`}></div>;
};

export default LoadingSkeleton;
