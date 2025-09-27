import PostsPage from "@pages/PostsPage";
import NotFoundPage from "@pages/NotFoundPage";
import PostDetailsPage from "@pages/PostDetailsPage";
import type { RouteObject } from "react-router-dom";

export const paths = {
    Home: {
        id: "home",
        path: "/",
    },
    PostDetailsPage: {
        id: "post-details",
        path: "/posts/:id",
    },
    PostsPage: {
        id: "posts",
        path: "/posts",
    },
    NotFoundPage: {
        id: "not-found-page",
        path: "*",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.Home,
        element: <PostsPage />,
    },
    {
        ...paths.PostDetailsPage,
        element: <PostDetailsPage />,
    },
    {
        ...paths.PostsPage,
        element: <PostsPage />,
    },
    {
        ...paths.NotFoundPage,
        element: <NotFoundPage />,
    },
];

export default routes;
