"use client";

import { RepositoryItem, Repository } from "@/modules";

interface Props {
  repositories: Repository[];
}
export default function List({ repositories }: Props) {
  return (
    <div className="mb-4">
      {repositories.map((repository) => (
        <RepositoryItem key={repository.node_id} repository={repository} />
      ))}
    </div>
  );
}
