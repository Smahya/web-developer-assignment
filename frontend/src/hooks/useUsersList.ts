import { useQuery } from "@tanstack/react-query";
import { PaginatedResponse, PaginationParams } from "@/types/shared";
import { User } from "@/types/shared";
import { usersQueryKeys } from "@/services/users";
import { useState } from "react";
import { DEFAULT_PAGINATION_PARAMS } from "@/utils/constants";
import apiService from "@/services";

export const useUsersList = () => {
  const [query, setQuery] = useState<PaginationParams>({
    ...DEFAULT_PAGINATION_PARAMS,
  });

  const usersQuery = useQuery<PaginatedResponse<User>, Error>({
    queryKey: [usersQueryKeys.list(query)],
    queryFn: async () => {
      const data = await apiService.users.getUsers(query);
      return {
        data,
        success: true,
        message: "Users fetched successfully",
      };
    },
  });

  const usersQueryCount = useQuery<number, Error>({
    queryKey: [usersQueryKeys.count()],
    queryFn: async () => {
      const count = await apiService.users.getUsersCount();
      return count.count;
    },
  });

  return { ...usersQuery, query, setQuery, usersQueryCount };
};
