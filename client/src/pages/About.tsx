export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 space-y-16 py-20">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Entrepreneurship Network
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Bridging the gap between academic learning and professional excellence by connecting young talent with industry-leading internship opportunities.
        </p>
      </div>

      {/* Mission, Vision, Impact Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-8 rounded-lg bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower students and young professionals with hands-on, real-world experience that transforms theoretical knowledge into practical skills, preparing them for successful careers in technology.
          </p>
        </div>

        <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="150">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            A world where every aspiring student has equal access to quality internship opportunities, mentorship, and career growth resources, regardless of their background or location.
          </p>
        </div>

        <div className="p-8 rounded-lg bg-gradient-to-br from-teal-50 to-white shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="300">
          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Our Impact</h3>
          <p className="text-gray-600 leading-relaxed">
            Over 1,000+ interns successfully placed across 24+ specialized technology programs, helping shape the next generation of tech leaders and innovators.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h3>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Entrepreneurship Network was founded with a simple yet powerful belief: every young mind deserves the opportunity to gain practical experience and kickstart their career in technology. We recognized a significant gap between what students learn in classrooms and what the industry actually demands.
          </p>
          <p>
            Starting with just a handful of internship programs, we've grown into a comprehensive platform offering opportunities across diverse technology domains—from frontend and backend development to artificial intelligence, cloud computing, and data science. Our growth has been driven by one core principle: quality over quantity.
          </p>
          <p>
            Today, we partner with innovative companies and organizations that share our vision of nurturing talent. Each internship program is carefully curated to ensure interns receive meaningful work experience, mentorship from industry professionals, and exposure to real-world projects that matter.
          </p>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="space-y-8" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center text-gray-800">What We Offer</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Diverse Opportunities</h4>
                <p className="text-gray-600">
                  24+ internship programs spanning frontend, backend, full-stack development, AI/ML, cloud computing, DevOps, data science, mobile development, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Expert Mentorship</h4>
                <p className="text-gray-600">
                  Work alongside experienced professionals who guide you through real-world projects, share industry insights, and help accelerate your learning curve.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Real Projects</h4>
                <p className="text-gray-600">
                  Gain hands-on experience by contributing to actual products and projects used by real users, building a portfolio that stands out to future employers.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">Career Growth</h4>
                <p className="text-gray-600">
                  Build valuable connections, develop in-demand skills, and gain the confidence needed to launch a successful career in the technology industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-xl p-8 md:p-12 text-white" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center mb-12">Our Achievements</h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">1000+</div>
            <div className="text-purple-100">Interns Placed</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">24+</div>
            <div className="text-purple-100">Programs Offered</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">50+</div>
            <div className="text-purple-100">Partner Companies</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">95%</div>
            <div className="text-purple-100">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-8" data-aos="fade-up">
        <h3 className="text-3xl font-bold text-center text-gray-800">Our Core Values</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Excellence</h4>
            <p className="text-sm text-gray-600">Committed to delivering the highest quality internship experiences</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Inclusivity</h4>
            <p className="text-sm text-gray-600">Open opportunities for all, regardless of background</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Innovation</h4>
            <p className="text-sm text-gray-600">Encouraging creative thinking and problem-solving</p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Support</h4>
            <p className="text-sm text-gray-600">Dedicated to helping every intern succeed</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-12" data-aos="fade-up">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready to Start Your Journey?</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have transformed their careers through our internship programs. Your future in tech starts here.
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
          Browse Internships
        </button>
      </div>
    </section>
  )
}