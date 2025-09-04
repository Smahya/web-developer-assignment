import axiosInstance from "@/lib/axios-instance";
import { CreatePostData } from "@/types/shared";

export const PostServices = {
  getPosts: async (params: { userId: string }) => {
    const response = await axiosInstance.get(`/posts`, { params });
    return response.data;
  },
  createPost: async (data: CreatePostData) => {
    const response = await axiosInstance.post(`/posts`, data);
    return response.data;
  },
  deletePost: async (id: string) => {
    const response = await axiosInstance.delete(`/posts/${id}`);
    return response.data;
  },
};

export const postsQueryKeys = {
  all: ["posts"],
  lists: () => [...postsQueryKeys.all, "list"],
  list: (params: { userId: string }) => [...postsQueryKeys.lists(), params],
};
