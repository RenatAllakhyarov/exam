import Loader from "@components/Loader";
import ToolBar from "@components/ToolBar";
import PostCard from "@components/PostCard";
import useDebounce from "@hooks/useDebounce";
import ErrorState from "@components/ErrorState";
import EmptyState from "@components/EmptyState";
import CustomButton from "@components/CustomButton";
import useFilteredPosts from "@hooks/useFilteredPosts";
import { usePostsAndUsers } from "@contexts/PostsAndUsersContext";
import { usePagination } from "@hooks/usePagination";
import { useEffect, useMemo, useState } from "react";
import {
    POSTS_PER_PAGE,
    TIMER_OF_DEBOUNCE_MS,
    KEY,
} from "@utils/constants/index";
import "./style.css";

const PostsPage = () => {
    const { posts, users, loading, error } = usePostsAndUsers();

    const savedFilters = JSON.parse(localStorage.getItem(KEY) || "{}");

    const [search, setSearch] = useState(savedFilters.search || "");
    const [selectedAuthorId, setSelectedAuthorId] = useState<string | number>(
        savedFilters.selectedAuthorId || ""
    );

    const debouncedSearch = useDebounce(search, TIMER_OF_DEBOUNCE_MS);

    const filteredPosts = useMemo(() => {
        return useFilteredPosts(posts, debouncedSearch, selectedAuthorId);
    }, [posts, debouncedSearch, selectedAuthorId]);

    const { postsToDisplay, showMorePosts, hasMorePosts } = usePagination(
        filteredPosts,
        POSTS_PER_PAGE,
        [debouncedSearch, selectedAuthorId]
    );

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify({ search, selectedAuthorId }));
    }, [search, selectedAuthorId]);

    const emptyMessage: string = useMemo(() => {
        return debouncedSearch || selectedAuthorId
            ? "No posts match your criteria."
            : "There are no posts at the moment.";
    }, [debouncedSearch, selectedAuthorId]);

    if (loading) {
        return <Loader message="Posts loading..." />;
    }

    if (error) {
        return (
            <ErrorState
                message={`Error: ${error}`}
                onRepeat={() => window.location.reload()}
            />
        );
    }

    const authorOptions = [
        { value: "", label: "All authors" },
        ...users.map((user) => ({ value: user.id, label: user.name })),
    ];

    const getAuthorName = (userId: number) => {
        const author = users.find((user) => user.id === userId);
        return author?.name ?? `Author: ${userId}`;
    };

    console.log("POSTS PAGE RENDER");

    return (
        <div className="posts-page">
            <h1 className="title-text">Posts</h1>
            <ToolBar
                search={search}
                setSearch={setSearch}
                selectedAuthorId={selectedAuthorId}
                setSelectedAuthorId={setSelectedAuthorId}
                authorOptions={authorOptions}
            />
            {!postsToDisplay?.length && <EmptyState message={emptyMessage} />}
            {postsToDisplay?.length && (
                <div className="posts-list">
                    {postsToDisplay.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            authorName={getAuthorName(post.userId)}
                        />
                    ))}
                </div>
            )}
            {hasMorePosts && (
                <div className="show-more-container">
                    <CustomButton
                        onClick={showMorePosts}
                        label="Show more posts"
                    />
                </div>
            )}
        </div>
    );
};

export default PostsPage;
