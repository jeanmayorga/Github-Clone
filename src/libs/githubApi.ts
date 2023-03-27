import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
