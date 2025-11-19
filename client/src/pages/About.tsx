export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 space-y-8 py-20">
      <h2 className="text-4xl md:text-5xl font-heading font-semibold">About Entrepreneurship Network</h2>
      <p className="text-lg md:text-xl text-gray-700">Our mission is to connect young talent with industry-leading internship opportunities.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded bg-white shadow" data-aos="fade-up">
          <h3 className="text-lg font-semibold">Mission</h3>
          <p className="text-sm text-gray-600">Empower students with real-world experience.</p>
        </div>
        <div className="p-6 rounded bg-white shadow" data-aos="fade-up" data-aos-delay="150">
          <h3 className="text-lg font-semibold">Vision</h3>
          <p className="text-sm text-gray-600">A world where every student has access to growth opportunities.</p>
        </div>
        <div className="p-6 rounded bg-white shadow" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold">Impact</h3>
          <p className="text-sm text-gray-600">1000+ interns placed across 24+ programs.</p>
        </div>
      </div>
    </section>
  )
}