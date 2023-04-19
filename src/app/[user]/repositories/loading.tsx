import { RepositoryItemSkeleton } from "./components/RepositoryItemSkeleton";

export default function Loading() {
  return (
    <div className="mb-4">
      {Array.from({ length: 30 }, (_number, index) => (
        <RepositoryItemSkeleton key={index} />
      ))}
    </div>
  );
}
