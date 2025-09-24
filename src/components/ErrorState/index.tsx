import { type ReactElement } from "react";
import "./style.css";

interface IErrorStateProps {
    message: string;
    onRepeat?: () => void;
}

const ErrorState = ({
    message = "Server is not working...",
    onRepeat,
}: IErrorStateProps): ReactElement => {
    return (
        <div className="error-state-container">
            <p className="error-message primary-text">Error: {message}</p>
            {onRepeat && (
                <button onClick={onRepeat} className="retry-button nav-button">
                    Repeat?
                </button>
            )}
        </div>
    );
};

export default ErrorState;
