import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${solid ? 'bg-white shadow' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center text-white font-bold">∞</div>
          <span className="font-heading font-semibold">Entrepreneurship Network</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary'}>Contact Us</NavLink>
          <NavLink to="/signin" className="px-4 py-2 rounded border hover:bg-gray-100">Sign In</NavLink>
          <NavLink to="/signup" className="px-4 py-2 rounded bg-gradient-main text-white">Get Started</NavLink>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 flex flex-col gap-2">
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact Us</NavLink>
            <NavLink to="/signin" onClick={() => setOpen(false)} className="px-4 py-2 rounded border">Sign In</NavLink>
            <NavLink to="/signup" onClick={() => setOpen(false)} className="px-4 py-2 rounded bg-gradient-main text-white">Get Started</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}