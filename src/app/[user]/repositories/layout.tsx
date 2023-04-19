import React from "react";
import { RepositoryFilters } from "./components/RepositoryFilters";

interface Props {
  children: React.ReactNode;
}
export default async function Layout({ children }: Props) {
  return (
    <>
      <RepositoryFilters />
      {children}
    </>
  );
}
