import axiosInstance from "@/lib/axios-instance";
import { PaginationParams } from "@/types/shared";

export const UserServices = {
  getUsers: async (params: PaginationParams) => {
    const response = await axiosInstance.get(`/users`, { params });
    return response.data;
  },
  getUsersCount: async () => {
    const response = await axiosInstance.get(`/users/count`);
    return response.data;
  },
};

export const usersQueryKeys = {
  all: ["users"],
  lists: () => [...usersQueryKeys.all, "list"],
  list: (params: PaginationParams) => [...usersQueryKeys.lists(), params],
};
