import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold" data-aos="fade-up">
            Empowering Young Minds Through Technology
          </h1>
          <p className="text-lg text-gray-700" data-aos="fade-up" data-aos-delay="150">
            Providing internships to the next generation of innovators.
          </p>
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="300">
            <Link to="/signup" className="px-6 py-3 rounded-lg bg-gradient-main text-white font-semibold hover:opacity-90 transition">
              Get Started
            </Link>
            <Link to="/internships" className="px-6 py-3 rounded-lg border hover:bg-white/60 transition">
              Explore Opportunities
            </Link>
          </div>
          <div className="flex gap-8 pt-6" data-aos="fade-up" data-aos-delay="450">
            <Stat label="Interns Placed" value="1000+" />
            <Stat label="Companies" value="50+" />
            <Stat label="Programs" value="24+" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary/20 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary-dark/20 blur-2xl" />
          <div className="relative bg-white/70 backdrop-blur rounded-2xl p-8 shadow-lg">
            <p className="font-semibold">Internship Categories</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
              {['Frontend', 'Backend', 'Full Stack', 'Data Science', 'AI/ML', 'Cloud/DevOps', 'Mobile', 'QA'].map((c) => (
                <li key={c} className="px-3 py-2 rounded bg-gray-100">{c}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 animate-bounce text-gray-600">
        ↓
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string, value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}