import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
