import type { NextApiRequest, NextApiResponse } from "next";
import octokit from "../../lib/octokit";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await octokit.repos.listForUser({
      username: "Thush20210156",
    });
    res.status(200).json(data);
    console.log(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch repositories" });
  }
}
