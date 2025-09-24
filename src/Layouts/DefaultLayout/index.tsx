import Header from "@components/Header";
import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";

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
