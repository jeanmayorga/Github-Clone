import useSWR from "swr";
import { Profile } from "./types";
import { githubApi } from "../../services";

export function useProfile(user?: string) {
  const { data, isLoading } = useSWR<Profile>(`users/${user}`, githubApi);

  return {
    profile: data,
    isLoadingProfile: isLoading,
  };
}
