import { Nav, SideBar } from "@/components";
import { getProfile } from "@/modules/Profile/services";
import { notFound, redirect } from "next/navigation";
import React from "react";

interface Props {
  children: React.ReactNode;
  params: {
    user: string;
  };
}
export default async function Layout({ children, params: { user } }: Props) {
  const profile = await getProfile({ user });

  if (!profile) {
    notFound();
  }

  return (
    <div>
      <Nav repositoriesCount={profile.public_repos} />

      <div className="w-[1280px] m-auto px-[32px]">
        <div className="grid gap-3 grid-cols-4">
          <div className="-mt-[32px]">
            <SideBar profile={profile} />
          </div>
          <div className="col-span-3 ml-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
