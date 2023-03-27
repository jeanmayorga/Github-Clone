import { githubApi } from "@/libs";
import { Repository, RepositoryParams } from "./types";

export async function getRepositories(options: {
  user: string;
  params: RepositoryParams;
}) {
  const data = await githubApi.get<Repository[]>(
    `users/${options.user}/repos`,
    {
      params: options.params,
    }
  );

  return data.data;
}
