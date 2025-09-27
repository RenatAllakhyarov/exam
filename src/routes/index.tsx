import routes from "./routes";
import { Route, Routes, type RouteObject } from "react-router-dom";
import type { ReactElement } from "react";

const renderRoutes = (routes: RouteObject[]): ReactElement[] => {
    return routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element} />
    ));
};

const ApplicationRouter = (): ReactElement => {
    return <Routes>{renderRoutes(routes)}</Routes>;
};

export default ApplicationRouter;
