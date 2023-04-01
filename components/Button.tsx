import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  large?: boolean;
  outline?: boolean;
}
export default function Button({
  label,
  onClick,
  disabled,
  large,
  fullWidth,
  outline,
  secondary,
}: ButtonProps) {
  return (
    <button
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-full
      font-semibold
      hover:opacity-80
      transition
      border-2
      ${fullWidth ? "w-full" : "w-fit"}
      ${secondary ? "bg-white" : "bg-sky-500"}
      ${secondary ? "text-black" : "text-white"}
      ${secondary ? "border-black" : "border-sky-500"}
      ${large ? "text-xl" : "text-md"}
      ${large ? "px-5" : "px-4"}
      ${large ? "py-3" : "py-2"}
      ${outline ? "bg-transparent" : ""}
      ${outline ? "border-white" : ""}
      ${outline ? "text-white" : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
