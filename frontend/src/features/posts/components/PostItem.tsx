import Bin from "@/assets/icons/bin";
import { Text } from "@/components";
import { useDeletePost } from "@/hooks/useDeletePost";
import { Post } from "@/types/shared";

export const PostItem = ({ post }: { post: Post }) => {
  const { deletePost, isPending } = useDeletePost();

  return (
    <div className="border border-gray-300 rounded-lg h-72 max-w-[270px] relative shadow-custom">
      <button
        type="button"
        disabled={isPending}
        onClick={() => deletePost(post.id)}
        className="flex items-end justify-end ml-auto p-2 absolute top-0 right-0"
      >
        <Bin className="text-red-400" size={14} />
      </button>
      <div className="grid gap-4 p-6">
        <Text variant="h6" className="text-gray-600 leading-[120%]">
          {post.title}
        </Text>
        <PostBody post={post} />
      </div>
    </div>
  );
};

function PostBody({ post }: { post: Post }) {
  // Simple line clamp based on title length
  const getLineClamp = (title: string) => {
    if (title.length > 60) return 5;
    if (title.length > 40) return 6;
    if (title.length > 20) return 7;
    return 8;
  };

  const lineClamp = getLineClamp(post.title);
  return (
    <Text
      variant="p"
      className="text-gray-600 leading-[140%] overflow-hidden"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
        textOverflow: "ellipsis",
      }}
    >
      {post.body}
    </Text>
  );
}
