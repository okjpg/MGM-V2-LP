import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
    children: ReactNode;
    className?: string;
}

const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
    children,
    className,
}) => {
    return (
        <span className={cn("shiny-text-effect", className)}>
            {children}
        </span>
    );
};

export { AnimatedShinyText };
