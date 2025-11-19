export default function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-4">
      <h2 className="text-3xl font-heading font-semibold mb-4">Contact Us</h2>
      <p className="text-gray-700 mb-4">Have questions? Fill out the form and our team will get back to you.</p>
      <form className="space-y-3">
        <input className="w-full px-3 py-2 border rounded" placeholder="Name" required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Email" type="email" required />
        <input className="w-full px-3 py-2 border rounded" placeholder="Subject" required />
        <textarea className="w-full px-3 py-2 border rounded" placeholder="Message" rows={5} required />
        <button className="px-4 py-2 rounded bg-gradient-main text-white">Send Message</button>
      </form>

      <div className="mt-6 text-sm text-gray-600">
        <p>Email: support@entrepreneurship.network</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
    </section>
  )
}