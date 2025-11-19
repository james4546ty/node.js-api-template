import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await axios.post('/api/auth/signin', { email, password, remember }, { withCredentials: true })
      navigate('/dashboard')
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Sign in failed')
    }
  }

  return (
    <section className="mx-auto max-w-md px-4">
      <h2 className="text-3xl font-heading font-semibold mb-4">Sign in</h2>
      {error && <div className="mb-3 px-3 py-2 rounded bg-error/10 text-error">{error}</div>}
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="w-full px-3 py-2 border rounded" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
            <span>Remember Me</span>
          </label>
          <a href="#" className="text-primary hover:underline">Forgot Password?</a>
        </div>
        <button className="w-full px-4 py-2 rounded bg-gradient-main text-white">Sign In</button>
      </form>
      <div className="mt-3 text-sm text-gray-600">
        Or sign in with:
        <div className="flex gap-2 mt-2">
          <button className="px-3 py-2 rounded border">Google</button>
          <button className="px-3 py-2 rounded border">GitHub</button>
        </div>
      </div>
    </section>
  )
}