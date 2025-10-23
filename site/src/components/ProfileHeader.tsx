import React, { useEffect, useState } from 'react'

type Profile = {
  avatar_url: string
  bio: string | null
  name: string
}

const GITHUB_USER = 'HadesTheSilent'
const LINKEDIN_URL = 'https://linkedin.com/in/jullian-salles-escobar-084588251'

export default function ProfileHeader() {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then(res => res.json())
      .then(data => setProfile({
        avatar_url: data.avatar_url,
        bio: data.bio,
        name: data.name || data.login
      }))
      .catch(err => console.error(err))
  }, [])

  if (!profile) return null

  return (
    <div className="profile-header">
      <img src={profile.avatar_url} alt={profile.name} className="profile-avatar" />
      <div className="profile-info">
        <h2 className="profile-name">{profile.name}</h2>
        {profile.bio && <p className="profile-bio">{profile.bio}</p>}
        <div className="profile-links">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="profile-link linkedin">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}
