import { githubApi } from "../../libs";
import { Profile } from "./types";

interface Options {
  user: string;
}
export async function getProfile({ user }: Options) {
  try {
    const response = await githubApi.get<Profile>(`users/${user}`);

    return response.data;
  } catch (error: any) {
    return null;
  }
}
