import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  id?: string;
  handleClick?: (...args: any[]) => void;
}

const Button: React.FC<ButtonProps> = ({
  id,
  disabled,
  className,
  children,
  handleClick,
}) => {
  return (
    <button
      id={id}
      className={`${className} ${styles.button}`}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
