import { useParams } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import apiService from "@/services";
import { postsQueryKeys } from "@/services/posts";

export const useDeletePost = () => {
  /**
   * Query client
   */
  const queryClient = useQueryClient();
  const params = useParams();

  /**
   * Mutation
   */
  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: (id: string) => apiService.posts.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [postsQueryKeys.list({ userId: params.userId as string })],
      });
    },
    onError: (err) => {
      console.error({ err });
    },
  });

  return { deletePost, isPending };
};
