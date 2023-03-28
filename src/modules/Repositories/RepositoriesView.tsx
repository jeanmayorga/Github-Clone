"use client";

import { useEffect } from "react";
import {
  RepositoryFilters,
  RepositoriesList,
  RepositoriesPagination,
  useRepositories,
} from "@/modules";
import { useFiltersStore } from "@/store";

interface Props {
  user: string;
}
export function RepositoriesView({ user }: Props) {
  const { type, language, sort, direction, query, page } = useFiltersStore();

  const { count, repositories, isLoading } = useRepositories({ user });

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [type, language, sort, direction, query, page]);

  return (
    <div className="pl-[1px]">
      <RepositoryFilters />
      <RepositoriesList repositories={repositories} isLoading={isLoading} />
      <RepositoriesPagination repositoriesCount={count} />
    </div>
  );
}
