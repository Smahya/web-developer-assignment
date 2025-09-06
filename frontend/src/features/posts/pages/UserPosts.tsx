"use client";

import ArrowLeft from "@/assets/icons/arrow-left";
import { Button, Text } from "@/components";
import { useUsersPostsList } from "@/hooks/usePostsList";
import { useSearchParams, useRouter } from "next/navigation";
import { PostItem } from "../components/PostItem";
import { LoadingWrapper } from "@/components/Loader/LoadingWrapper";
import { NewPostModal } from "../components/NewPostModal";

export const UserPostsPage = ({ userId }: { userId: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data: postsData, isLoading } = useUsersPostsList({
    userId,
  });

  return (
    <LoadingWrapper loading={isLoading}>
      <div className="grid gap-6 max-w-[270px] sm:max-w-[564px] lg:max-w-full mx-auto">
        <div className="grid gap-4">
          <Button variant="link" onClick={() => router.push("/")}>
            <ArrowLeft /> Back to users
          </Button>
          <Text variant="h3">{searchParams.get("name")}</Text>
          <Text variant="p">
            <span className="lowercase">{searchParams.get("email")}</span> •{" "}
            {postsData?.length} Posts
          </Text>
        </div>

        <div className="flex flex-wrap gap-6">
          <NewPostModal />

          {postsData?.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </LoadingWrapper>
  );
};
