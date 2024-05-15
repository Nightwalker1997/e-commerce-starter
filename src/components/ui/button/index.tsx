'use client';

import { ReactNode, FC } from "react";
import clsx from "clsx";

type ButtonProps = {
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullWidth?: boolean;
    children?: ReactNode,
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button:FC<ButtonProps> = ({
    type,
    fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return(
        <button 
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                px-3
                py-2
                text-sm
                fonst-semibold
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                rounded
                text-tx-base
                bg-bg-light
                shadow-md
                hover:shadow-sm
                hover:shadow-tx-base
                hover:text-tx-light
                hover:bg-bg-dark
            `,
                disabled && "opacity-50 cursor-defualt",
                // fullWidth && "w-full",
                // secondary ? "text-tx-base" : "text-bg-base",
                // danger && "bg-red-light hover:bg-red-base focus-visible:outline-red-base",
                // !secondary && !danger && "bg-blue-base hover:bg-blue-light focus-visible:outline-blue-base"
            )}
        >
            {children}
        </button>
    )
}

export default Button;