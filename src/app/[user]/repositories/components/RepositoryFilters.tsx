"use client";

import { Select, Button } from "@/components";
import { useFiltersStore } from "@/store";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useDebouncyEffect } from "use-debouncy";

export function RepositoryFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="py-4 border-b border-[#d8dee4] dark:border-[#373e47]">
      <div className="xl:flex xl:flex-auto">
        <div className="w-full md:flex-auto xl:mr-4 mb-4 xl:mb-0">
          <input
            placeholder="Find a repository..."
            className="input"
            // defaultValue={query}
            onChange={(event) => console.log(event.target.value)}
          />
        </div>
        <div className="flex mb-4 xl:mb-0">
          <Select
            name="type"
            className="mr-1"
            // defaultValue={type}
            onSelect={(value) => {
              console.log("render");
              console.log(
                "VALUE",
                value,
                pathname + "?" + createQueryString("type", value)
              );
              router.push(pathname + "?" + createQueryString("type", value));
            }}
            options={[
              { label: "All", value: "all" },
              { label: "Owner", value: "owner" },
              { label: "Member", value: "member" },
            ]}
          >
            Type
          </Select>
          <Select
            name="language"
            className="mr-1"
            // defaultValue={language}
            onSelect={(value) => console.log(value)}
            options={[
              { label: "All", value: "all" },
              { label: "JavaScript", value: "javascript" },
              { label: "TypeScript", value: "typescript" },
              { label: "Python", value: "python" },
              { label: "Ruby", value: "ruby" },
              { label: "Java", value: "java" },
              { label: "C++", value: "c++" },
              { label: "C", value: "c" },
              { label: "Shell", value: "shell" },
              { label: "C#", value: "c#" },
              { label: "Go", value: "go" },
              { label: "PHP", value: "php" },
              { label: "Perl", value: "perl" },
              { label: "Css", value: "css" },
              { label: "Vue", value: "vue" },
              { label: "Scala", value: "scala" },
              { label: "HTML", value: "html" },
            ]}
          >
            Language
          </Select>
          <Select
            name="sort"
            className="mr-1"
            // defaultValue={sort}
            onSelect={(value) => console.log(value)}
            options={[
              { label: "Full Name", value: "full_name" },
              { label: "Last Updated", value: "updated" },
              { label: "Last Pushed", value: "pushed" },
              { label: "Last Created", value: "created" },
            ]}
          >
            Sort
          </Select>
          <Select
            name="direction"
            // defaultValue={direction}
            onSelect={(value) => console.log(value)}
            className="hidden md:block"
            options={[
              { label: "Asc", value: "asc" },
              { label: "Desc", value: "desc" },
            ]}
          >
            Direction
          </Select>
        </div>
        <div className="ml-0 xl:ml-4">
          <Button type="green">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              className="icon mr-1 fill-[#ffffffcc]"
            >
              <path
                fillRule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              ></path>
            </svg>
            New
          </Button>
        </div>
      </div>
    </div>
  );
}
