import NavigationBar from '../../components/NavigationBar';
import { type ReactElement } from 'react';
import './style.css';

const Header = (): ReactElement => {
    return (
        <header className="header">
            <NavigationBar />
        </header>
    );
};

export default Header;