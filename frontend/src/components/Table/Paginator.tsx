"use client";

import ArrowLeft from "@/assets/icons/arrow-left";
import { cn } from "@/lib/utils";
import { generateDottedPages } from "@/utils/generate-dotted-pages";
import { useMediaQuery } from "@uidotdev/usehooks";
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
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const radius = isSmallScreen ? 1 : 2;

  const pages = useMemo(
    () => generateDottedPages(total, pageSize, page, radius),
    [total, pageSize, page, radius]
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
    <div className="flex justify-between items-center gap-10">
      <NavigationButton onClick={handlePrev} disabled={page <= 1}>
        <ArrowLeft />
        <span className="hidden md:block">Previous</span>
      </NavigationButton>
      <div className="flex items-center gap-2">
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
        <span className="hidden md:block">Next</span>
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
        "sm:text-sm text-xs font-semibold p-1 rounded-md sm:w-10 sm:h-10 w-6 h-6 text-gray-600 hover:bg-brand-50 hover:text-brand-600 cursor-pointer",
        isActive && "bg-brand-50 text-brand-600"
      )}
    >
      {page}
    </button>
  );
}
