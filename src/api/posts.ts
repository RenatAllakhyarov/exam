import { jsonPlaceholderClient } from "./clients";
import type { IPost, IComment } from "../types";

class PostsApi {
    getPosts() {
        return jsonPlaceholderClient.get<IPost[]>("/posts");
    }

    getPostById(id: number) {
        return jsonPlaceholderClient.get<IPost>(`/posts/${id}`);
    }

    getPostComments(postId: number) {
        return jsonPlaceholderClient.get<IComment[]>(
            `/posts/${postId}/comments`
        );
    }

    addComment(postId: number, commentData: Omit<IComment, "id" | "postId">) {
        return jsonPlaceholderClient.post<IComment>(`/comments`, {
            postId,
            ...commentData,
        });
    }

    patchPost(id: number, postData: Partial<IPost>) {
        return jsonPlaceholderClient.patch<IPost>(`/posts/${id}`, postData);
    }

    deletePost(id: number) {
        return jsonPlaceholderClient.delete<void>(`/posts/${id}`);
    }
}

export const postsApi = new PostsApi();
