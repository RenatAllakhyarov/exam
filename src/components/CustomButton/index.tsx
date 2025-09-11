import type { ReactElement, ReactNode } from "react";
import "./style.css";

interface ICustomButtonProps {
    onClick: () => void;
    children?: string | ReactNode;
}

const CustomButton = ({
    onClick,
    children,
}: ICustomButtonProps): ReactElement => {
    return (
        <button className="custom-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;
