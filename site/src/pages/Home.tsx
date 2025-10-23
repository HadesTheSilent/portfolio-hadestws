import React, { useEffect, useState } from 'react'
import { fetchRepos, Repo } from '../lib/github'
import RepoCard from '../components/RepoCard'
import ProfileHeader from '../components/ProfileHeader'

const DEFAULT_USER = 'HadesTheSilent'

export default function Home(){
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetchRepos(DEFAULT_USER).then(data => {
      if (!mounted) return
      setRepos(data)
      setError(null)
    }).catch(err => {
      console.error(err)
      setError('Failed to load repositories')
      setRepos([])
    }).finally(() => {
      if (mounted) setLoading(false)
    })
    return () => { mounted = false }
  }, [])

  return (
    <div className="page">
      <ProfileHeader />
      
      <header className="header">
        <h1>Repositories</h1>
      </header>

      <main>
        {error && <div className="status">{error}</div>}
        {loading ? (
          <div className="status">Loading...</div>
        ) : repos === null ? (
          <div className="status">Loading...</div>
        ) : repos.length === 0 ? (
          <div className="status">No public repositories found.</div>
        ) : (
          <section className="grid">
            {repos.map(r => (
              <RepoCard key={r.id} repo={r} />
            ))}
          </section>
        )}
      </main>

      <footer className="footer">© 2025 — Jullian Salles</footer>
    </div>
  )
}
