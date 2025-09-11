import type { ReactElement, ReactNode } from "react";
import "./style.css";

interface ICustomButtonProps {
    onClick: () => void;
    children?: string | ReactNode;
    type?: string;
    disabled?: boolean;
}

const CustomButton = ({
    onClick,
    children,
    type = "",
    disabled = false,
}: ICustomButtonProps): ReactElement => {
    return (
        <button
            className={`custom-button ${type}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default CustomButton;