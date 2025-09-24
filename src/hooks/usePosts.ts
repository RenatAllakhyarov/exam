import type { IPost, IUser } from "@appTypes/index";
import { useEffect, useState } from "react";
import { postsApi } from "@api/posts";
import { usersApi } from "@api/users";

export const usePosts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);

            try {
                const [postsData, usersData] = await Promise.all([
                    postsApi.getPosts(),
                    usersApi.getUsers(),
                ]);
                setPosts(postsData);
                setUsers(usersData);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    return { posts, users, loading, error };
};
