import ApplicationRouter from "@routes/index";
import DefaultLayout from "@Layouts/DefaultLayout";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { PostsAndUsersProvider } from "@contexts/PostsAndUsersContext";
import { type ReactElement } from "react";
import "@domains/Theme/style.css";

const Application = (): ReactElement => {
    return (
        <div className="application-container">
            <RouterProvider>
                <DefaultLayout>
                    <PostsAndUsersProvider>
                        <ApplicationRouter />
                    </PostsAndUsersProvider>
                </DefaultLayout>
            </RouterProvider>
        </div>
    );
};

export default Application;
