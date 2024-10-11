import { FC } from "react";
import clsx from "clsx";

interface ButtonProps {
    variant?: "withIcon" | "primary"
    onClick?: () => void
    children?: React.ReactNode
    disabled?: boolean
    icon?: React.ReactNode
    className?: string
}

export const Button:FC<ButtonProps> = ({
    variant, 
    children, 
    onClick,
    disabled,
    icon,
    className
}) => {

    const buttonClasses = clsx(
        "p-3 focus:outline-none", 
        {
          "bg-black": variant === "withIcon", 
          "bg-indigo-500 hover:bg-indigo-600 font-semibold": variant === "primary",
        }
      );

    return (
       <button onClick={onClick} disabled={disabled} className={`${buttonClasses} ${className}`} >
           {icon}
           {children}
       </button>
    )
}