import { useQuery } from "@tanstack/react-query";
import { Post } from "@/types/shared";

import apiService from "@/services";
import { postsQueryKeys } from "@/services/posts";

export const useUsersPostsList = ({ userId }: { userId: string }) => {
  const postsQuery = useQuery<Post[], Error>({
    queryKey: [postsQueryKeys.list({ userId })],
    queryFn: () => apiService.posts.getPosts({ userId }),
  });

  return { ...postsQuery };
};
