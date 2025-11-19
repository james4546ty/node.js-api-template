import { useEffect, useState } from 'react'
import axios from 'axios'

type Internship = {
  id: number
  title: string
  skills_required: string
  description: string
  category: string
}

export default function Internships() {
  const [list, setList] = useState<Internship[]>([])
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [active, setActive] = useState<Internship | null>(null)
  const [email, setEmail] = useState('')

  useEffect(() => {
    axios.get('/api/internships', { withCredentials: true }).then(r => setList(r.data.internships || []))
    axios.get('/api/auth/me', { withCredentials: true }).then(r => setEmail(r.data.user?.email || '')).catch(() => {})
  }, [])

  const filtered = list.filter(i =>
    (!category || i.category.toLowerCase().includes(category.toLowerCase())) &&
    (!query || i.title.toLowerCase().includes(query.toLowerCase()) || i.skills_required.toLowerCase().includes(query.toLowerCase()))
  )

  const applyLink = (id: number) => {
    const base = 'https://docs.google.com/forms/d/e/1FAIpQLScMY6Dos28JVDpYmgXB9FK4QpepWxsn_rEH-mQ1AYiql4d_qA/viewform'
    const params = email ? `?entry.123456789=${encodeURIComponent(email)}` : ''
    return `${base}${params}`
  }

  return (
    <section className="mx-auto max-w-7xl px-4">
      <h2 className="text-3xl font-heading font-semibold mb-6">Apply for Internship</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          className="px-3 py-2 border rounded w-64"
          placeholder="Search by title or skills"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select className="px-3 py-2 border rounded" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {Array.from(new Set(list.map(l => l.category))).map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(i => (
          <div key={i.id} className="rounded-xl bg-white p-4 shadow hover:shadow-lg transition hover:-translate-y-0.5" data-aos="fade-up">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs px-2 py-1 rounded bg-secondary/10 text-secondary">{i.category}</span>
            </div>
            <h3 className="text-xl font-semibold">{i.title}</h3>
            <p className="text-sm text-gray-600 mt-2">Skills: {i.skills_required}</p>
            <button onClick={() => setActive(i)} className="mt-4 px-4 py-2 rounded border hover:bg-gray-100">View Details</button>
          </div>
        ))}
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={() => setActive(null)}>
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-heading font-semibold">{active.title}</h3>
              <button className="p-2" onClick={() => setActive(null)}>✕</button>
            </div>
            <div className="mt-2 text-sm text-gray-700">
              <p><strong>Skills Required:</strong> {active.skills_required}</p>
              <div className="mt-3">
                <p className="font-semibold">Role and Responsibilities:</p>
                <ul className="list-disc pl-5">
                  <li>Assist in designing and developing features.</li>
                  <li>Collaborate with cross-functional teams.</li>
                  <li>Implement responsive UI/components.</li>
                </ul>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-gray-600">
                <div><strong>Duration:</strong> 3-6 months</div>
                <div><strong>Type:</strong> Remote/Hybrid</div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a target="_blank" href={applyLink(active.id)} rel="noreferrer" className="px-4 py-2 rounded bg-gradient-main text-white">Apply Now</a>
              <button className="px-4 py-2 rounded border" onClick={() => setActive(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}