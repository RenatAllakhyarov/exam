import type { IPost } from "@appTypes/index";
import { useState, useEffect } from "react";

export const usePagination = (
    allPosts: IPost[],
    postsPerPage: number,
    dependencies: any[] = []
) => {
    const [visiblePostsCount, setVisiblePostsCount] = useState(postsPerPage);

    useEffect(() => {
        setVisiblePostsCount(postsPerPage);
    }, dependencies);

    const visiblePosts = allPosts.slice(0, visiblePostsCount);

    const showMorePosts = () => {
        setVisiblePostsCount((previousCount) => previousCount + postsPerPage);
    };

    const hasMorePosts = visiblePostsCount < allPosts.length;

    return {
        postsToDisplay: visiblePosts,
        showMorePosts,
        hasMorePosts,
    };
};
