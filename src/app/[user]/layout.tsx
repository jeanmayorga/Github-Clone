import React from "react";
import { notFound } from "next/navigation";

import { getProfile } from "./services";
import { Nav } from "@/components/Nav";
import { SideBar } from "@/components/SideBar";

interface Props {
  children: React.ReactNode;
  params: {
    user: string;
  };
}
export default async function Layout({ children, params: { user } }: Props) {
  const profile = await getProfile({ user });

  if (!profile) {
    return notFound();
  }

  return (
    <div>
      <Nav repositoriesCount={profile.public_repos} />

      <div className="w-full xl:w-[1280px] m-auto md:px-[32px] px-[15px]">
        <div className="md:grid md:gap-3 md:grid-cols-4">
          <div className="md:-mt-[32px] mt-4">
            <SideBar profile={profile} />
          </div>
          <div className="col-span-3 ml-0 md:ml-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
