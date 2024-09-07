"use client";

import React from "react";
import {  BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger" | "outline";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  rounded?: boolean;
  arrow?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type = "button",
  variant = "primary",
  icon,
  fullWidth = false,
  disabled = false,
  isLoading = false,
  rounded = true,
  arrow,
}) => {
  const classes = `
    ${
      variant === "primary"
        ? "bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        : variant === "secondary"
        ? "bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        : variant === "danger"
        ? "bg-danger hover:bg-danger-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        : variant === "outline"
        ? "border border-primary hover:border-primary-dark text-primary font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        : ""
    }
    ${fullWidth && "w-full"}
    ${rounded && "rounded-md"}
    ${disabled && "opacity-50 cursor-not-allowed"}
    ${isLoading && "cursor-wait"}
    ${arrow === "left" && "flex items-center gap-2"}
    ${arrow === "right" && "flex items-center gap-2 justify-end"}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classes}
    >
      {arrow === "left" && <BsFillArrowLeftCircleFill />}
      {icon}
      {children}
      {arrow === "right" && <BsFillArrowRightCircleFill />}
      {isLoading && <span className="ml-2 animate-spin rounded-full h-4 w-4 border-2 border-t-2 border-gray-900"></span>}
    </button>
  );
};

export default Button;