import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface SignUpForm {
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const initial: SignUpForm = { name: '', email: '', phone: '', password: '', confirmPassword: '' }

const passwordValid = (p: string) =>
  /[A-Z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p) && p.length >= 8

export default function SignUp() {
  const [form, setForm] = useState<SignUpForm>(initial)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!passwordValid(form.password)) {
      setError('Password must be at least 8 chars and include 1 uppercase, 1 number, and 1 special character.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      await axios.post('/api/auth/signup', {
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password
      }, { withCredentials: true })
      navigate('/dashboard')
    } catch (err: any) {
      setError(err?.response?.data?.error || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-md px-4">
      <h2 className="text-3xl font-heading font-semibold mb-4">Create your account</h2>
      {error && <div className="mb-3 px-3 py-2 rounded bg-error/10 text-error">{error}</div>}
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="w-full px-3 py-2 border rounded" placeholder="Full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Email" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Phone (+1...)" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Password" type="password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Confirm Password" type="password" value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} required />
        <button disabled={loading} className="w-full px-4 py-2 rounded bg-gradient-main text-white disabled:opacity-50">{loading ? 'Creating...' : 'Sign Up'}</button>
      </form>
    </section>
  )
}