"use client";

import { Button } from "@/components";

interface Props {
  repositoriesCount: number;
}
export function RepositoriesPagination({ repositoriesCount }: Props) {
  // const isFirstPage = page === 1;
  const hasNextPage = repositoriesCount === 30;

  return (
    <div className="mb-4 w-full flex justify-center">
      <div className="inline-flex">
        <Button
          type="outline"
          noBorderRight
          // disabled={isFirstPage}
          // onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Button
          type="outline"
          noBorderLeft
          disabled={!hasNextPage}
          // onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
