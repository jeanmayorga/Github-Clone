import { getRepositories } from "./services";
import { RepositoryItem } from "./components/RepositoryItem";
import { RepositoryFilters } from "./components/RepositoryFilters";
import { RepositoriesPagination } from "./components/RepositoryPagination";

interface Props {
  params: {
    user: string;
  };
  searchParams: {
    tab?: string;
    page?: number;
    query?: string;
    language?: string;
    type?: string;
    direction?: string;
    sort?: string;
  };
}

export default async function Page({ params, searchParams }: Props) {
  const repositories = await getRepositories({
    user: params.user,
    params: searchParams,
  });

  return (
    <>
      <RepositoryFilters />
      <div className="mb-4">
        {repositories.map((repository) => (
          <RepositoryItem key={repository.node_id} repository={repository} />
        ))}
      </div>
      <RepositoriesPagination repositoriesCount={repositories.length} />
    </>
  );
}
