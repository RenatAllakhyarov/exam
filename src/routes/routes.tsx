import TodosPage from "../pages/TodosPage";
import PostsPage from "../pages/PostsPage";
import AlbumsPage from "../pages/AlbumsPage";
import NotFoundPage from "../pages/NotFoundPage";
import DefaultLayout from "../Layouts/DefaultLayout";
import AlbumPhotosPage from "../pages/AlbumPhotosPage";
import PostDetailsPage from "../pages/PostDetailsPage";
import UserProfilePage from "../pages/UserProfilePage";
import { UsersCacheProvider } from "../context/UserCacheContext";
import type { RouteObject } from "react-router-dom";

export const paths = {
    Home: {
        id: "home",
        path: "/",
    },
    AlbumPhotosPage: {
        id: "albums-photos",
        path: "/albums/:id",
    },
    AlbumsPage: {
        id: "albums",
        path: "/albums",
    },
    PostDetailsPage: {
        id: "post-details",
        path: "/posts/:id",
    },
    PostsPage: {
        id: "posts",
        path: "/posts",
    },
    TodosPage: {
        id: "todos",
        path: "/todos",
    },
    UserProfilePage: {
        id: "user-profile",
        path: "/users/:id",
    },
    NotFoundPage: {
        id: "not-found-page",
        path: "*",
    },
};

const routes: RouteObject[] = [
    {
        element: (
            <UsersCacheProvider>
                <DefaultLayout />,
            </UsersCacheProvider>
        ),
        children: [
            {
                ...paths.AlbumPhotosPage,
                element: <AlbumPhotosPage />,
            },
            {
                ...paths.AlbumsPage,
                element: <AlbumsPage />,
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
                ...paths.TodosPage,
                element: <TodosPage />,
            },
            {
                ...paths.UserProfilePage,
                element: <UserProfilePage />,
            },
            {
                ...paths.NotFoundPage,
                element: <NotFoundPage />,
            },
        ],
    },
];

export default routes;
