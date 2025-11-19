import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    axios.get('/api/auth/me', { withCredentials: true })
      .then(r => setUser(r.data.user))
      .catch(() => {})
  }, [])

  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-heading font-semibold">Dashboard</h2>
        <Link to="/internships" className="px-4 py-2 rounded bg-gradient-main text-white">Explore Opportunities</Link>
      </div>
      <div className="mt-4">
        {user ? (
          <p className="text-gray-700">Welcome, <strong>{user.name}</strong></p>
        ) : (
          <p className="text-gray-700">You are not signed in. <Link to="/signin" className="text-primary">Sign In</Link></p>
        )}
      </div>
    </section>
  )
}