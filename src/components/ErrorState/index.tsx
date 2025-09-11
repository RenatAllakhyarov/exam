import { type ReactElement } from 'react';
import './style.css';

interface IErrorStateProps {
    message: string;
    onRetry?: () => void;
}

const ErrorState = ({ message, onRetry }: IErrorStateProps): ReactElement => {
    return (
        <div className="error-state-container">
            <p className="error-message primary-text">Ошибка: {message}</p>
            {onRetry && (
                <button onClick={onRetry} className="retry-button nav-button">
                    Повторить
                </button>
            )}
        </div>
    );
};

export default ErrorState;