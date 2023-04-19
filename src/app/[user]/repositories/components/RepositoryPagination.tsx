"use client";
import { Button } from "@/components/Button";
import { useSearchParams } from "next/navigation";

interface Props {
  repositoriesCount: number;
}
export function RepositoryPagination({ repositoriesCount }: Props) {
  const searchParams = useSearchParams()!;

  const page = Number(searchParams.get("page")) || 1;

  const isFirstPage = page === 1;
  const hasNextPage = repositoriesCount === 30;

  return (
    <div className="mb-4 w-full flex justify-center">
      <div className="inline-flex">
        <Button
          type="outline"
          noBorderRight
          disabled={isFirstPage}
          // onClick={() => addQueryParam("page", page - 1)}
        >
          Previous
        </Button>
        <Button
          type="outline"
          noBorderLeft
          // disabled={!hasNextPage}
          // onClick={() => addQueryParam("page", page + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
