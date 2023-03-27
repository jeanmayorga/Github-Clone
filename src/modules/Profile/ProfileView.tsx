"use client";

import { useSearchParams } from "next/navigation";
import { RepositoriesView } from "@/modules";

export function ProfileView() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  return (
    <>
      <div>{tab === "repositories" && <RepositoriesView />}</div>
    </>
  );
}
