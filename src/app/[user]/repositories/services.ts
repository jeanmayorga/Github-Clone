import { githubApi } from "@/libs";
import { Repository, RepositoryParams } from "./types";

export async function getRepositories(options: {
  user: string;
  params: RepositoryParams;
}) {
  const { query, language } = options.params;
  const data = await githubApi.get<Repository[]>(
    `users/${options.user}/repos`,
    {
      params: {
        page: options.params.page,
        type: options.params.type,
        direction: options.params.direction,
        sort: options.params.sort,
        per_page: 100,
      },
    }
  );

  let repositories: Repository[] = data.data;

  if (query) {
    repositories = repositories.filter((repo) => repo.name.includes(query));
  }

  if (language && language !== "all") {
    repositories = repositories.filter(
      (repo) => (repo.language || "").toLowerCase() === language
    );
  }

  return repositories;
}
