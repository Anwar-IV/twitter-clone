import { HTMLAttributes, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export default function Input({
  disabled,
  placeholder,
  type,
  onChange,
  value,
}: InputProps) {
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      className="
      w-full
      p-4
      text-lg
      bg-black
      border-2
      border-neutral-800
      rounded-md
      outline-none
      text-white
      focus:border-sky-500
      focus:border-2
      transition
      disabled:bg-neutral-900
      disabled:opacity-70
      disabled:cursor-not-allowed
      "
    />
  );
}
