import { MessageCircleWarning } from "lucide-react";

export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <>
      {error ? (
        <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 p-2 rounded-md w-fit">
          <MessageCircleWarning size={16} />
          {error}
        </div>
      ) : null}
    </>
  );
};
