import React, { FC } from "react";
import cn from "classnames";

interface IButton {
  children: string;
  className?: string;
  onClick?: () => void;
  size?: string;
  theme?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: FC<IButton> = (props) => {
  const { children, className, onClick, size, theme, disabled } = props;

  return (
    <button
      className={cn(
        "block w-28 h-10 rounded-md font-medium",
        { "w-20 h-8": size === "sm" },
        { "w-32 h-12": size === "lg" },
        { "bg-zinc-200 text-black": theme === "primary" },
        { "bg-blue-400 text-white": theme === "secondary" },
        className
      )}
      disabled={disabled}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
