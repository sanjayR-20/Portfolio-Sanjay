export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
};

export type GitHubProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string | null;
  location: string | null;
};

const githubFetch = async <T,>(url: string): Promise<T | null> => {
  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json'
      },
      next: {
        revalidate: 3600
      }
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as T;
  } catch {
    return null;
  }
};

export const getFeaturedRepositories = async (
  username: string,
  featuredNames: readonly string[]
): Promise<GitHubRepo[]> => {
  const repos = await githubFetch<GitHubRepo[]>(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
  );

  if (!repos) {
    return [];
  }

  const byName = new Map(repos.map((repo) => [repo.name.toLowerCase(), repo]));

  return featuredNames
    .map((name) => byName.get(name.toLowerCase()))
    .filter((repo): repo is GitHubRepo => Boolean(repo));
};

export const getGitHubProfile = async (username: string): Promise<GitHubProfile | null> => {
  return githubFetch<GitHubProfile>(`https://api.github.com/users/${username}`);
};

export const getProfileReadme = async (username: string): Promise<string> => {
  try {
    const res = await fetch(`https://raw.githubusercontent.com/${username}/${username}/main/README.md`, {
      next: {
        revalidate: 3600
      }
    });

    if (!res.ok) {
      return '';
    }

    return await res.text();
  } catch {
    return '';
  }
};

export const extractReadmeExcerpt = (markdown: string, maxLines = 12): string => {
  if (!markdown) {
    return 'README preview is unavailable right now. Visit GitHub for the full profile details.';
  }

  const cleanedLines = markdown
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .filter((line) => !line.startsWith('!['))
    .filter((line) => !line.startsWith('[!['))
    .filter((line) => !line.toLowerCase().includes('socials'))
    .filter((line) => !line.toLowerCase().includes('github activity'))
    .filter((line) => !line.toLowerCase().includes('github stats'))
    .filter((line) => !line.toLowerCase().includes('github trophies'));

  return cleanedLines.slice(0, maxLines).join('\n');
};
