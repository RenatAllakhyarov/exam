import { jsonPlaceholderClient } from "../api/clients";
import type { IUser } from "../types";

class UsersApi {
  getUsers() {
    return jsonPlaceholderClient.get<IUser[]>("/users");
  }

  getUserById(id: number) {
    return jsonPlaceholderClient.get<IUser>(`/users/${id}`);
  }
}

export const usersApi = new UsersApi();