import routes from "./routes";
import { Route, Routes, type RouteObject } from "react-router-dom";
import type { ReactElement } from "react";

const renderRoutes = (routes: RouteObject[]): ReactElement[] => {
    return routes.map((route) => {
        if (route.children) {
            return (
                <Route
                    key={route.id || route.path}
                    path={route.path}
                    element={route.element}
                >
                    {renderRoutes(route.children)}
                </Route>
            );
        }
        return (
            <Route
                key={route.id || route.path}
                path={route.path}
                element={route.element}
            />
        );
    });
};

const ApplicationRouter = (): ReactElement => {
    return <Routes>{renderRoutes(routes)}</Routes>;
};

export default ApplicationRouter;