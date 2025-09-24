import { type ReactElement } from "react";
import "./style.css";

interface IEmptyStateProps {
    message?: string;
}

const EmptyState = ({
    message = "Oh, it's empty...",
}: IEmptyStateProps): ReactElement => {
    return (
        <div className="empty-state-container">
            <p className="empty-message secondary-text">{message}</p>
        </div>
    );
};

export default EmptyState;
