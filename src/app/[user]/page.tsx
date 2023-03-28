"use client";

import { RepositoriesView } from "@/modules";
import { useSearchParams } from "next/navigation";

interface Props {
  params: {
    user: string;
  };
}

export default function Page({ params: { user } }: Props) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <>
      <div>{tab === "repositories" && <RepositoriesView user={user} />}</div>
    </>
  );
}
