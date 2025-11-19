import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
          <a href="/" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact Us</a>
          <Link to="/signin" className="px-4 py-2 rounded border hover:bg-gray-100">Sign In</Link>
          <Link to="/signup" className="px-4 py-2 rounded bg-gradient-main text-white">Get Started</Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 flex flex-col gap-2">
            <a href="/" onClick={() => setOpen(false)}>Home</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact Us</a>
            <Link to="/signin" onClick={() => setOpen(false)} className="px-4 py-2 rounded border">Sign In</Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="px-4 py-2 rounded bg-gradient-main text-white">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  )
}