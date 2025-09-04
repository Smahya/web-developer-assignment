import { PostServices } from "./posts";
import { UserServices } from "./users";

export const apiService = {
  users: UserServices,
  posts: PostServices,
};

export default apiService;
