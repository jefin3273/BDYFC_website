import React from "react";

interface ButtonProps {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className = "",
  onClick,
  children,
}) => (
  <button className={`p-2 rounded ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
