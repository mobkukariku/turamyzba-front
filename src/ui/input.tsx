import { ChangeEvent, FC } from "react";
import clsx from "clsx";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    variant?: "primary" | "secondary";
    className?: string;
}

export const Input: FC<InputProps> = ({
    type = "text",
    value,
    onChange,
    variant,
    placeholder,
    className,
}) => {

    const inputClasses = clsx(
        "px-4 py-2 focus:outline-none", 
        {
          "bg-primary w-[450px] text-[20px] placeholder:text-color ": variant === "primary", 
          "rounded-lg ": variant === "secondary", 
        }
      );
   
    return (
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${inputClasses} ${className}`} 
      />
    )
}