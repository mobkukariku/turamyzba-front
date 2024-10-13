import { forwardRef, ChangeEvent, } from "react";
import clsx from "clsx";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    variant?: "primary" | "secondary";
    className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps & React.InputHTMLAttributes<HTMLInputElement>>(
  ({ type = "text", value, onChange, variant, placeholder, className, ...rest }, ref) => {
    const inputClasses = clsx(
      "px-4 py-2 focus:outline-none text-black",
      {
        "bg-primary w-[450px] text-[20px] placeholder:text-color text-white": variant === "primary",
        "rounded-lg": variant === "secondary",
      }
    );

    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputClasses} ${className}`}
        ref={ref} 
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
