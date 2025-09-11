import { type ReactElement } from 'react';
import './style.css';

interface ILoaderProps {
    message?: string;
}

const Loader = ({ message = "Загрузка данных..." }: ILoaderProps): ReactElement => {
    return (
        <div className="loader-container">
            <div className="spinner" />
            <p className="loader-message primary-text">{message}</p>
        </div>
    );
};

export default Loader;