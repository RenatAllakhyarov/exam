import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import { type ReactElement } from "react";

const DefaultLayout = (): ReactElement => {
    return (
        <div className="default-layout">
            <Header />
            <main className="app-content">
                <Outlet />
            </main>
        </div>
    );
};

export default DefaultLayout;
