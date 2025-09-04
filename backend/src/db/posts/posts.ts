import { connection } from "../connection";
import {
  selectPostsTemplate,
  insertPostTemplate,
  deletePostTemplate,
} from "./query-tamplates";
import { Post } from "./types";
import { randomUUID } from "crypto";

export const getPosts = (userId: string): Promise<Post[]> =>
  new Promise((resolve, reject) => {
    connection.all(selectPostsTemplate, [userId], (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results as Post[]);
    });
  });

export interface CreatePostData {
  title: string;
  body: string;
  userId: string;
}

export const createPost = (postData: CreatePostData): Promise<Post> =>
  new Promise((resolve, reject) => {
    const id = randomUUID();
    const created_at = new Date().toISOString();

    connection.run(
      insertPostTemplate,
      [id, postData.userId, postData.title, postData.body, created_at],
      function (error) {
        if (error) {
          reject(error);
          return;
        }

        // Return the created post
        const newPost: Post = {
          id,
          user_id: postData.userId,
          title: postData.title,
          body: postData.body,
          created_at,
        };

        resolve(newPost);
      }
    );
  });

export const deletePost = (postId: string): Promise<boolean> =>
  new Promise((resolve, reject) => {
    connection.run(deletePostTemplate, [postId], function (error) {
      if (error) {
        reject(error);
        return;
      }

      // Check if any rows were affected (post existed and was deleted)
      resolve(this.changes > 0);
    });
  });
