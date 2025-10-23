export type Repo = {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  updated_at: string
}

export async function fetchRepos(username: string): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&sort=updated`)
  if (!res.ok) throw new Error('GitHub API error')
  return res.json()
}
