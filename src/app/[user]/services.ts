import { githubApi } from "../../libs";
import { Profile } from "./types";

interface Options {
  user: string;
}
export async function getProfile({ user }: Options) {
  try {
    const data = await githubApi.get<Profile>(`users/${user}`);

    return data.data;
  } catch (error: any) {
    console.log(error?.response?.data);
    return null;
  }
}
