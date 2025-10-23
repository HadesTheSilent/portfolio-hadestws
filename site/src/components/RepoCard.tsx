import React from 'react'
import type { Repo } from '../lib/github'

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <article className="card">
      <a className="card-link" href={repo.html_url} target="_blank" rel="noopener noreferrer" />
      <h3 className="card-title">{repo.name}</h3>
      <p className="card-desc">{repo.description || ''}</p>
      <div className="card-meta">
        <span className="pill">{repo.language || '—'}</span>
        <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </article>
  )
}
