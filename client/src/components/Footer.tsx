export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} Entrepreneurship Network</span>
        <div className="flex items-center gap-4">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <a href="/" className="hover:text-primary">Home</a>
        </div>
      </div>
    </footer>
  )
}