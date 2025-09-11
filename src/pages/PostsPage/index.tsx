import Select from "../../components/Select";
import Loader from "../../components/Loader";
import PostCard from "../../components/PostCard";
import SearchBar from "../../components/SearchBar";
import ErrorState from "../../components/ErrorState";
import EmptyState from "../../components/EmptyState";
import CustomButton from "../../components/CustomButton";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { useUsersCache } from "../../context/UserCacheContext";
import { postsApi } from "../../api/posts";
import { type IPost } from "../../types";
import {
    type ReactElement,
    useState,
    useEffect,
    useCallback,
    useMemo,
} from "react";
import "./style.css";

const POSTS_PER_PAGE = 10;

const PostsPage = (): ReactElement => {
    const [allPosts, setAllPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState<string>("");
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

    const [selectedAuthorId, setSelectedAuthorId] = useState<string | number>(
        ""
    );

    const { users, loading: usersLoading, error: usersError } = useUsersCache();

    const [displayCount, setDisplayCount] = useState<number>(POSTS_PER_PAGE);

    const fetchPosts = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const fetchedPosts = await postsApi.getPosts();
            setAllPosts(fetchedPosts);
        } catch (err) {
            console.error("Failed to fetch posts:", err);
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!usersLoading && !usersError) {
            fetchPosts();
        }
    }, [usersLoading, usersError, fetchPosts]);

    useEffect(() => {
        setDisplayCount(POSTS_PER_PAGE);
    }, [debouncedSearchTerm, selectedAuthorId]);

    const authorOptions = useMemo(() => {
        if (!users) {
            return [];
        }
        const allAuthorsOption = { value: "", label: "Все авторы" };
        return [
            allAuthorsOption,
            ...users.map((user) => ({ value: user.id, label: user.name })),
        ];
    }, [users]);

    const filteredPosts = useMemo(() => {
        if (!allPosts) {
            return [];
        }
        let currentFilteredPosts = allPosts;

        if (debouncedSearchTerm) {
            currentFilteredPosts = currentFilteredPosts.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(debouncedSearchTerm.toLowerCase())
            );
        }

        if (selectedAuthorId) {
            const authorIdNum = Number(selectedAuthorId);
            if (!isNaN(authorIdNum)) {
                currentFilteredPosts = currentFilteredPosts.filter(
                    (post) => post.userId === authorIdNum
                );
            }
        }

        return currentFilteredPosts;
    }, [allPosts, debouncedSearchTerm, selectedAuthorId]);

    const postsToDisplay = useMemo(() => {
        return filteredPosts.slice(0, displayCount);
    }, [filteredPosts, displayCount]);

    const handleShowMore = () => {
        setDisplayCount((prevCount) => prevCount + POSTS_PER_PAGE);
    };

    const hasMorePosts = displayCount < filteredPosts.length;

    if (loading || usersLoading) {
        return <Loader message="Загрузка постов..." />;
    }

    if (error) {
        return (
            <ErrorState
                message={`Ошибка загрузки постов: ${error}`}
                onRetry={fetchPosts}
            />
        );
    }

    if (usersError) {
        return (
            <ErrorState
                message={`Ошибка загрузки данных пользователей: ${usersError}`}
                onRetry={() => window.location.reload()}
            />
        );
    }

    return (
        <div className="posts-page">
            <h1 className="title-text">Лента постов</h1>
            <div className="filters-container">
                <SearchBar
                    value={searchTerm}
                    onChange={setSearchTerm}
                    placeholder="Поиск по заголовку..."
                />
                <Select
                    options={authorOptions}
                    value={selectedAuthorId}
                    onChange={setSelectedAuthorId}
                    placeholder="Фильтр по автору"
                />
            </div>

            {postsToDisplay.length === 0 ? (
                <EmptyState
                    message={
                        debouncedSearchTerm || selectedAuthorId
                            ? "Посты не найдены по заданным критериям."
                            : "На данный момент постов нет."
                    }
                />
            ) : (
                <>
                    <div className="post-list">
                        {postsToDisplay.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                    {hasMorePosts && (
                        <div className="show-more-container">
                            <CustomButton onClick={handleShowMore}>
                                Показать ещё
                            </CustomButton>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default PostsPage;
