import { jsonPlaceholderClient } from "./clients";

class PostsApi {
    getPosts() {
        return jsonPlaceholderClient.get("/posts");
    }

    getPostById(id: number) {
        return jsonPlaceholderClient.get(`/posts/${id}`);
    }

    getPostComments(postId: number) {
        return jsonPlaceholderClient.get(`/posts/${postId}/comments`);
    }

    addComment(postId: number, commentData: any) {
        return jsonPlaceholderClient.post(`/comments`, {
            postId,
            ...commentData,
        });
    }

    patchPost(id: number, postData: any) {
        return jsonPlaceholderClient.patch(`/posts/${id}`, postData);
    }

    deletePost(id: number) {
        return jsonPlaceholderClient.delete(`/posts/${id}`);
    }
}

export const postsApi = new PostsApi();
