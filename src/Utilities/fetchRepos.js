import { subDays, format } from "date-fns";

export async function fetchRepos(page = 1, durationInDays = 30) {
  const date = subDays(new Date(), durationInDays);
  const URL = `https://api.github.com/search/repositories?q=created:>${format(
    date,
    "yyyy-MM-dd"
  )}&sort=stars&order=desc&page=${page}`;

  let response;
  try {
    response = await fetch(URL);
  } catch (error) {
    throw error;
  }
  if (response.ok) {
    const repos = await response.json();
    return repos.items;
  } else {
    throw response;
  }
}

export const filterRepos = data => {
  return data
    ? data.map(item => ({
        id: item.id,
        name: item.name,
        description: item.description,
        stars: item.stargazers_count,
        issues: item.open_issues_count,
        owner: item.owner.login,
        avatar: item.owner.avatar_url,
        created_at: item.created_at,
        owner_url: item.owner.html_url,
        repo_url: item.html_url
      }))
    : [];
};
