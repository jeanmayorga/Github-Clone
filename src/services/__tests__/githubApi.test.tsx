import { Profile, Repository } from "../../modules";
import { githubApi } from "../githubApi";

describe("testing githubApi", () => {
  test("get profile test", async () => {
    const data = await githubApi<Profile>("users/octocat");

    expect(data.login).toBe("octocat");
  });

  test("get profile repositories test", async () => {
    const data = await githubApi<Repository[]>("users/octocat/repos");

    expect(data.length).toBeGreaterThanOrEqual(1);
  });
});

export {};
