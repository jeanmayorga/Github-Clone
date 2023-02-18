import { useEffect } from "react";
import useSWR from "swr";
import { githubApi } from "../../services";
import { Repository } from "./types";

interface Params {
  page?: number;
  query?: string;
  language?: string;
  type?: string;
  direction?: string;
  sort?: string;
}

export function useRepositories(options: { user?: string; params?: Params }) {
  const { user, params } = options;
  let repositories: Repository[] = [];
  const {
    data = [],
    isLoading,
    mutate,
  } = useSWR<Repository[]>(`users/${user}/repos`, (url) =>
    githubApi(url, params)
  );
  repositories = data;

  if (params?.query) {
    repositories = repositories.filter((repo) =>
      repo.name.includes((params.query || "").toLowerCase())
    );
  }

  if (params?.language !== "all") {
    repositories = repositories.filter(
      (repo) => (repo.language || "").toLowerCase() === params?.language
    );
  }

  useEffect(() => {
    mutate();
  }, [JSON.stringify(params)]);

  return { repositories, isLoadingRepositories: isLoading };
}
