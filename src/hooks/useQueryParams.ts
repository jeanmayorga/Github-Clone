import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams<T = {}>() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const urlSearchParams = new URLSearchParams(searchParams);

  const queryParams = useMemo(() => {
    const params: Partial<T> = {};

    for (const [key, value] of searchParams.entries()) {
      (params as any)[key] = value;
    }

    return params;
  }, [searchParams]);

  function setQueryParams(params: Partial<T>) {
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.set(key, String(value));
    });

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  function removeQueryParam(key: string) {
    urlSearchParams.delete(key);

    const search = urlSearchParams.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  }

  return { queryParams, setQueryParams, removeQueryParam };
}
