import { jsonPlaceholderClient } from "./clients";

class UsersApi {
    getUsers() {
        return jsonPlaceholderClient.get("/users");
    }

    getUserById(id: number) {
        return jsonPlaceholderClient.get(`/users/${id}`);
    }
}

export const usersApi = new UsersApi();
