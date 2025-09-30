import type { IPost } from "@appTypes/index";

export const POSTS_PER_PAGE = 10;

export const TIMER_OF_DEBOUNCE_MS = 300;

export const KEY = "postsPageFilters";

export const DEFAULT_SEARCHER_PLACEHOLDER = "Search by title...";

export const DEFAULT_SELECT_PLACEHOLDER = "Filter by author";

export const filteredPosts = (
    posts: IPost[],
    search: string,
    authorId: string
): IPost[] => {
    return posts.filter((post) => {
        const lowerTitle = post.title.toLowerCase();

        const lowerSearch = search.toLowerCase();

        const matchesSearch = lowerTitle.includes(lowerSearch);

        const isAuthorEmpty = authorId === "";

        const isAuthorSame = post.userId === Number(authorId);

        const matchesAuthor = isAuthorEmpty || isAuthorSame;

        return matchesSearch && matchesAuthor;
    });
};
