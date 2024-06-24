import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {

    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button;