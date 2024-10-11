import { FC } from "react";

interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export const Container: FC<ContainerProps> = ({children, className}) => {
    return (
        <div className={`container max-w-[1200px] m-auto ${className} `}>
            {children}
        </div>
    )
}