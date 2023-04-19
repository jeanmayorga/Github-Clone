export interface Repository {
  node_id: string;
  id: number;
  name: string;
  fork: boolean;
  description: string;
  topics: string[];
  language: string;
  homepage: string;
  stargazers_count: number;
  pushed_at: string;
}

export interface RepositoryParams {
  page?: number;
  query?: string;
  language?: string;
  type?: string;
  direction?: string;
  sort?: string;
}
