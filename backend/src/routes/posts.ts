import { Router, Request, Response } from "express";
import {
  getPosts,
  createPost,
  CreatePostData,
  deletePost,
} from "../db/posts/posts";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const userId = req.query.userId?.toString();
  if (!userId) {
    res.status(400).send({ error: "userId is required" });
    return;
  }
  const posts = await getPosts(userId);
  res.send(posts);
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { title, body, userId } = req.body;

    // Input validation
    if (!title || typeof title !== "string" || title.trim() === "") {
      res
        .status(400)
        .send({ error: "Title is required and must be a non-empty string" });
      return;
    }

    if (!body || typeof body !== "string" || body.trim() === "") {
      res
        .status(400)
        .send({ error: "Body is required and must be a non-empty string" });
      return;
    }

    if (!userId || typeof userId !== "string" || userId.trim() === "") {
      res
        .status(400)
        .send({ error: "User ID is required and must be a non-empty string" });
      return;
    }

    // Create the post
    const postData: CreatePostData = {
      title: title.trim(),
      body: body.trim(),
      userId: userId.trim(),
    };

    const newPost = await createPost(postData);
    res.status(201).send(newPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).send({ error: "Failed to create post" });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Input validation
    if (!id || typeof id !== "string" || id.trim() === "") {
      res
        .status(400)
        .send({ error: "Post ID is required and must be a non-empty string" });
      return;
    }

    // Delete the post
    const wasDeleted = await deletePost(id.trim());

    if (!wasDeleted) {
      res.status(404).send({ error: "Post not found" });
      return;
    }

    res.status(200).send({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).send({ error: "Failed to delete post" });
  }
});

export default router;
