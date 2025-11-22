import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset
      const viewport = window.innerHeight
      const full = document.documentElement.scrollHeight
      // Show footer when user is near the bottom (within 24px)
      const atBottom = scrollY + viewport >= full - 24
      setVisible(atBottom)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} Entrepreneurship Network</span>
        <div className="flex items-center gap-4">
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <Link to="/" className="hover:text-primary">Home</Link>
        </div>
      </div>
    </footer>
  )
}