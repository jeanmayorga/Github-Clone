"use client";

import { Button } from "@/components/Button";
import useQueryParams from "@/hooks/useQueryParams";

interface QueryParams {
  page: string;
}

interface Props {
  repositoriesCount: number;
}
export function RepositoryPagination({ repositoriesCount }: Props) {
  const { queryParams, setQueryParams } = useQueryParams<QueryParams>();

  const page = Number(queryParams.page) || 1;

  const isFirstPage = page === 1;
  const hasNextPage = repositoriesCount === 100;

  return (
    <div className="mb-4 w-full flex justify-center">
      <div className="inline-flex">
        <Button
          type="outline"
          noBorderRight
          disabled={isFirstPage}
          onClick={() => {
            setQueryParams({ page: String(page - 1) });
          }}
        >
          Previous
        </Button>
        <Button
          type="outline"
          noBorderLeft
          disabled={!hasNextPage}
          onClick={() => setQueryParams({ page: String(page + 1) })}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
