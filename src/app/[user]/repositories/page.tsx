import { getRepositories } from "./services";
import { RepositoryItem } from "./components/RepositoryItem";
import { RepositoryPagination } from "./components/RepositoryPagination";

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
      <div className="mb-4">
        {repositories.map((repository) => (
          <RepositoryItem
            key={repository.node_id}
            repository={repository}
            user={params.user}
          />
        ))}
      </div>
      <RepositoryPagination repositoriesCount={repositories.length} />
    </>
  );
}
