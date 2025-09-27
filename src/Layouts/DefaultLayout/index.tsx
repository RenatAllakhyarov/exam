import Header from "@components/Header";
import { type ReactElement } from "react";

interface IDefaultLayoutProps {
    children: ReactElement;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return (
        <div className="default-layout">
            <Header />
            <main className="app-content">{children}</main>
        </div>
    );
};

export default DefaultLayout;
