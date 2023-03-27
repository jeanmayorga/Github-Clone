import { RepositoryItemSkeleton, RepositoryItem, Repository } from "@/modules";

interface Props {
  repositories: Repository[];
  isLoading: boolean;
}
export function RepositoriesList({ repositories, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="mb-4">
        {Array.from({ length: 30 }, (_number, index) => (
          <RepositoryItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="mb-4">
      {repositories.map((repository) => (
        <RepositoryItem key={repository.node_id} repository={repository} />
      ))}
    </div>
  );
}
