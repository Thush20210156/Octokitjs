import octokit from "../lib/octokit";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
};

const fetchRepos = async (): Promise<Repo[]> => {
  try {
    const { data } = await octokit.repos.listForUser({
      username: "Thush20210156",
    });
    return data;
  } catch (error) {
    console.error("Failed to fetch repositories", error);
    return [];
  }
};

const Home = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
