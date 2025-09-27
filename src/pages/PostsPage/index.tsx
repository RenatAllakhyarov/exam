import Loader from "@components/Loader";
import Filters from "@components/Filters";
import PostCard from "@components/PostCard";
import useDebounce from "@hooks/useDebounce";
import ErrorState from "@components/ErrorState";
import EmptyState from "@components/EmptyState";
import CustomButton from "@components/CustomButton";
import useFilteredPosts from "@hooks/useFilteredPosts";
import { usePagination } from "@hooks/usePagination";
import { usePosts } from "@hooks/usePosts";
import { useState } from "react";
import "./style.css";

const POSTS_PER_PAGE = 10;

const PostsPage = () => {
    const { posts, users, loading, error } = usePosts();
    const [search, setSearch] = useState("");
    const [selectedAuthorId, setSelectedAuthorId] = useState<string | number>(
        ""
    );
    const debouncedSearch = useDebounce(search, 300);
    const filteredPosts = useFilteredPosts(
        posts,
        debouncedSearch,
        selectedAuthorId
    );
    const { postsToDisplay, showMorePosts, hasMorePosts } = usePagination(
        filteredPosts,
        POSTS_PER_PAGE,
        [debouncedSearch, selectedAuthorId]
    );

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

    const emptyMessage =
        debouncedSearch || selectedAuthorId
            ? "No posts match your criteria."
            : "There are no posts at the moment.";

    const getAuthorName = (userId: number) => {
        const author = users.find((user) => user.id === userId);
        return author?.name ?? `Author: ${userId}`;
    };

    return (
        <div className="posts-page">
            <h1 className="title-text">Posts</h1>
            <Filters
                search={search}
                setSearch={setSearch}
                selectedAuthorId={selectedAuthorId}
                setSelectedAuthorId={setSelectedAuthorId}
                authorOptions={authorOptions}
            />
            {!postsToDisplay?.length && (
                <EmptyState message={emptyMessage} />
            )}
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
