import type { ReactElement, ReactNode } from "react";
import "./style.css";

interface ICustomButtonProps {
    onClick: () => void;
    label?: string | ReactNode;
    className?: string;
}

const CustomButton = ({
    onClick,
    label,
    className = "",
}: ICustomButtonProps): ReactElement => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default CustomButton;
