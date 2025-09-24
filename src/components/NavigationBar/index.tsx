import CustomButton from "@components/CustomButton";
import { useNavigate } from "react-router-dom";
import { type ReactElement } from "react";
import { paths } from "@routes/routes";
import "./style.css";

const NavigationBar = (): ReactElement => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <nav className="navigation-bar">
            <CustomButton
                onClick={() => handleNavigation(paths.PostsPage.path)}
                className={`nav-button ${paths.PostsPage.path ? "active" : ""}`}
                label="Posts"
            />
        </nav>
    );
};

export default NavigationBar;
