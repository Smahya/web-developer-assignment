import { Button, ErrorMessage, InputText, Text } from "@/components";
import { InputTexarea } from "@/components/Input/InputTexarea";
import { Modal } from "@/components/Modal";
import apiService from "@/services";
import { postsQueryKeys } from "@/services/posts";
import { CreatePostData } from "@/types/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CirclePlus } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";

export const NewPostModal = () => {
  /**
   *  State
   */
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  /**
   * Query client
   */
  const queryClient = useQueryClient();
  const params = useParams();

  /**
   * Mutation
   */
  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (data: CreatePostData) => apiService.posts.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [postsQueryKeys.list({ userId: params.userId as string })],
      });
      closeModal();
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  /**
   * Handle submit
   */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createPost({ title, body, userId: params.userId as string });
  }

  function closeModal() {
    setOpen(false);
    setTitle("");
    setBody("");
  }

  return (
    <Modal
      trigger={<NewPostButton />}
      title={<Text variant="h3">New Post</Text>}
      open={open}
      setOpen={setOpen}
      contentClassName="!max-w-2xl"
    >
      <form className="grid gap-4 mt-2" onSubmit={handleSubmit}>
        <ErrorMessage error={error} />
        <InputText
          onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
          id="title"
          label="Post Title"
          placeholder="Enter title"
        />
        <InputTexarea
          onChange={(e) => setBody((e.target as HTMLTextAreaElement).value)}
          rows={6}
          id="body"
          label="Post Content"
          placeholder="Enter body"
        />
        <div className="flex items-end justify-end gap-2 mt-2">
          <Button variant="secondary" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button
            loading={isPending}
            type="submit"
            disabled={isPending || !title || !body}
          >
            Publish
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export const NewPostButton = () => {
  return (
    <div className="grid place-items-center gap-2 content-center h-72 w-68 border-dashed border-2 border-gray-300 rounded-md cursor-pointer text-gray-600 font-medium">
      <CirclePlus />
      New Post
    </div>
  );
};
