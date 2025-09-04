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
      const [data, count] = await Promise.all([
        apiService.users.getUsers(query),
        apiService.users.getUsersCount(),
      ]);
      return {
        data,
        ...count,
        success: true,
        message: "Users fetched successfully",
      };
    },
  });

  return { ...usersQuery, query, setQuery };
};
