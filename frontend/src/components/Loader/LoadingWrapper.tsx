import { Loader } from "..";

export const LoadingWrapper = ({
  children,
  loading,
}: {
  children: React.ReactNode;
  loading: boolean;
}) => {
  return (
    <>
      {loading ? (
        <div className="grid place-items-center content-center h-full my-20">
          <Loader />
        </div>
      ) : (
        children
      )}
    </>
  );
};
