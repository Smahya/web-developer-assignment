import ArrowLeft from "@/assets/icons/arrow-left";
import { cn } from "@/lib/utils";
import { generateDottedPages } from "@/utils/generate-dotted-pages";
import { useMemo } from "react";

export const Paginator = ({
  page,
  total,
  pageSize,
  setPage,
}: {
  page: number;
  total: number;
  pageSize: number;
  setPage: (page: number) => void;
}) => {
  const pages = useMemo(
    () => generateDottedPages(total, pageSize, page),

    [total, pageSize, page]
  );

  function handlePageClick(page: number | string) {
    if (typeof page === "string") return;
    setPage(page);
  }

  function handleNext() {
    if (page >= total / pageSize) return;
    setPage(page + 1);
  }

  function handlePrev() {
    if (page <= 1) return;
    setPage(page - 1);
  }
  return (
    <div className="flex justify-between items-center">
      <NavigationButton onClick={handlePrev} disabled={page <= 1}>
        <ArrowLeft />
        Previous
      </NavigationButton>
      <div className="flex items-center overflow-x-auto gap-2">
        {pages.map((pg, i) => (
          <PageButton
            page={pg as number}
            key={`pg-${i + 1}`}
            onClick={() => handlePageClick(pg)}
            isActive={page === pg}
          />
        ))}
      </div>
      <NavigationButton
        onClick={handleNext}
        disabled={page >= total / pageSize}
      >
        Next
        <ArrowLeft className="rotate-180" />
      </NavigationButton>
    </div>
  );
};

function NavigationButton({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-gray-600 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function PageButton({
  page,
  isActive,
  onClick,
}: {
  page: number;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "font-semibold p-1 rounded-md w-10 h-10 text-gray-600 hover:bg-brand-50 hover:text-brand-600 cursor-pointer",
        isActive && "bg-brand-50 text-brand-600"
      )}
    >
      {page}
    </button>
  );
}
