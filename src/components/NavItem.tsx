"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

interface Props {
  name: string;
  text: string;
  icon: React.ReactNode;
  count?: number;
}
export function NavItem({ name, text, icon, count }: Props) {
  const params = useParams();
  const pathname = usePathname();

  const isTabActive = pathname === `/${params.user}/${name}`;

  const navClassNames =
    "py-[8px] px-[16px] text-sm leading-[30px] text-center whitespace-nowrap border-b-2 hover:border-[#afb8c133] cursor-pointer transition-all";
  const activeNavClassNames = "border-[#fd8c73] hover:border-[#fd8c73]";

  return (
    <Link href={`${params.user}/${name}`}>
      <div
        className={clsx(
          isTabActive ? activeNavClassNames : "border-transparent",
          navClassNames
        )}
      >
        {icon}
        {text}
        {count && (
          <span className="ml-2 text-[#24292f] dark:text-[#adbac7] bg-[#afb8c133] inline-block py-[2px] px-[6px] text-xs font-medium leading--[18px] text-center rounded-full">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
