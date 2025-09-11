import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/routes";
import { type ReactElement } from "react";
import "./style.css";

const NavigationBar = (): ReactElement => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <nav className="navigation-bar">
            <button
                onClick={() => handleNavigation(paths.PostsPage.path)}
                className={`nav-button ${paths.PostsPage.path ? "active" : ""}`}
            >
                Посты
            </button>
            <button
                onClick={() => handleNavigation(paths.TodosPage.path)}
                className={`nav-button ${paths.TodosPage.path ? "active" : ""}`}
            >
                Задачи
            </button>
            <button
                onClick={() => handleNavigation(paths.AlbumsPage.path)}
                className={`nav-button ${
                    paths.AlbumsPage.path ? "active" : ""
                }`}
            >
                Альбомы
            </button>
        </nav>
    );
};

export default NavigationBar;
