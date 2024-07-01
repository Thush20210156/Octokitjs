import { Octokit } from "@octokit/rest";
//import { getToken } from "@octokit/auth-token";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default octokit;
