import { UserPostsPage } from "@/features/posts/pages/UserPosts";

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  return <UserPostsPage userId={userId} />;
}
