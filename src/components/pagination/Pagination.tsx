"use client";

import Link from "next/link";

interface PaginationProps {
  page: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
  basePath: string;
}

const Pagination = ({
  page,
  totalPages,
  hasPrevPage,
  hasNextPage,
  prevPage,
  nextPage,
  basePath,
}: PaginationProps) => {
  return (
    <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
      {/* Previous */}
      <Link
        href={hasPrevPage ? `${basePath}?page=${prevPage}` : "#"}
        className={`rounded-md px-4 py-2 text-sm transition ${
          hasPrevPage
            ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
            : "cursor-not-allowed bg-slate-50 text-slate-400"
        }`}
      >
        Previous
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => {
        const pageNumber = i + 1;

        return (
          <Link
            key={pageNumber}
            href={`${basePath}?page=${pageNumber}`}
            className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition ${
              pageNumber === page
                ? "bg-[#003366] text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {pageNumber}
          </Link>
        );
      })}

      {/* Next */}
      <Link
        href={hasNextPage ? `${basePath}?page=${nextPage}` : "#"}
        className={`rounded-md px-4 py-2 text-sm transition ${
          hasNextPage
            ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
            : "cursor-not-allowed bg-slate-50 text-slate-400"
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
