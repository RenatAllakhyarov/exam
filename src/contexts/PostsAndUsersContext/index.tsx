import type { IPost, IUser } from "@appTypes/index";
import { postsApi } from "@api/posts";
import { usersApi } from "@api/users";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
    type ReactNode,
} from "react";

interface IPostsAndUsersContext {
    posts: IPost[];
    users: IUser[];
    loading: boolean;
    error: string | null;
}

const PostsAndUsersContext = createContext<IPostsAndUsersContext>(
    {} as IPostsAndUsersContext
);

let loadedPosts: IPost[] | null = null;
let loadedUsers: IUser[] | null = null;

interface IPostsAndUsersProviderProps {
    children: ReactNode;
}

export const PostsAndUsersProvider = ({
    children,
}: IPostsAndUsersProviderProps) => {
    const [posts, setPosts] = useState<IPost[]>(loadedPosts || []);
    const [users, setUsers] = useState<IUser[]>(loadedUsers || []);
    const [loading, setLoading] = useState(!loadedPosts || !loadedUsers);
    const [error, setError] = useState<string | null>(null);

    const loadData = useCallback(async () => {
        setLoading(true);

        try {
            //TODO what Promise and Promise.all
            const [postsData, usersData] = await Promise.all([
                postsApi.getPosts(),
                usersApi.getUsers(),
            ]);

            loadedPosts = postsData;
            loadedUsers = usersData;

            setPosts(postsData);
            setUsers(usersData);
        } catch (err: unknown) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        loadData();
    }, [loadData]);

    return (
        <PostsAndUsersContext.Provider
            value={{
                posts,
                users,
                loading,
                error,
            }}
        >
            {children}
        </PostsAndUsersContext.Provider>
    );
};

export const usePostsAndUsers = () => useContext(PostsAndUsersContext);
