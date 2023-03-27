import { useQuery } from "react-query";

import { getRepositories } from "./services";
import { useFiltersStore } from "@/store";

export function useRepositories(options: { user: string }) {
  const { type, language, sort, direction, query, page } = useFiltersStore();

  const { data, isLoading } = useQuery({
    queryFn: () =>
      getRepositories({
        user: options.user,
        params: { type, language, sort, direction, query, page },
      }),
    queryKey: ["repositories", type, language, sort, direction, query, page],
  });

  let repositories = data || [];

  if (query) {
    repositories = repositories.filter((repo) =>
      repo.name.includes((query || "").toLowerCase())
    );
  }

  if (language !== "all") {
    repositories = repositories.filter(
      (repo) => (repo.language || "").toLowerCase() === language
    );
  }

  return {
    repositories,
    isLoading,
    count: repositories.length || 0,
  };
}
