import axios from "axios";

const cache = new Map();
export async function githubApi<T = {}>(
  path: string,
  params?: any
): Promise<T> {
  const hash = `${path}${params ? `?${JSON.stringify(params)}` : ""}`;

  if (cache.has(hash)) {
    return cache.get(hash);
  }

  const { data } = await axios.get(`https://api.github.com/${path}`, {
    params,
  });

  cache.set(hash, data);

  return data;
}
