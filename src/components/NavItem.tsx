import clsx from "clsx";
import { Link } from "react-router-dom";
import { useQueryParam } from "use-query-params";

interface Props {
  name: string;
  text: string;
  icon: React.ReactNode;
  isFirstItem?: boolean;
  count?: number;
}
export function NavItem({ name, text, icon, isFirstItem, count }: Props) {
  const [tab] = useQueryParam("tab");

  const navClassNames =
    "py-[8px] px-[16px] text-sm leading-[30px] text-center whitespace-nowrap border-b-2 hover:border-[#afb8c133] cursor-pointer transition-all";
  const activeNavClassNames =
    "border-[#fd8c73] hover:border-[#fd8c73] font-semibold";

  return (
    <Link to={`?tab=${name}`}>
      <div
        className={clsx(
          tab === name || isFirstItem
            ? activeNavClassNames
            : "border-transparent",
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
