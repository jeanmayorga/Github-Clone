import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
