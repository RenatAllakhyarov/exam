import type { IPost } from "@appTypes/index";

const useFilteredPosts = (
    posts: IPost[],
    search: string,
    authorId: string | number
) => {
    const filteredPosts = posts.filter((post) => {
        const lowerTitle = post.title.toLowerCase();

        const lowerSearch = search.toLowerCase();

        const matchesSearch = lowerTitle.includes(lowerSearch);

        const isAuthorEmpty = authorId === "";

        const isAuthorSame = post.userId === Number(authorId);

        const matchesAuthor = isAuthorEmpty || isAuthorSame;

        return matchesSearch && matchesAuthor;
    });

    return filteredPosts;
};

export default useFilteredPosts;
