import React, { FC } from "react";
import "./Button.styles.scss";

export enum ButtonVariantType {
  FILLED = "filled",
  BORDER = "border",
}
export enum ButtonColorType {
  SUCCESS = "#39cdcc",
  ERROR = "#ff3366",
  INFO = "#5718ff",
}
const Button: FC<{
  label: string;
  onClick?: () => void;
  variant: ButtonVariantType;
  type: "button" | "submit" | "reset" | undefined;
  color?: ButtonColorType | string;
}> = ({ label, onClick, type, variant, color = "#333" }) => {
  return (
    <button
      style={{
        border:
          variant === ButtonVariantType?.BORDER ? `1px solid ${color}` : 0,
        backgroundColor:
          variant === ButtonVariantType?.FILLED ? color : "transparent",
        color: variant === ButtonVariantType?.FILLED ? "#fff" : color,
      }}
      className={`btn ${
        variant === ButtonVariantType?.FILLED ? "filled__btn" : "border__btn"
      }`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
