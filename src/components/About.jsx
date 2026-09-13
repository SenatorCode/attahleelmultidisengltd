export default function About() {
  return (
    <section id="about" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">About us</h2>
        </div>
        <div className="md:col-span-2 text-slate-600 leading-relaxed space-y-4">
          <p>
            We are a team of architects and civil engineers providing
            design, construction, and supervision services for residential
            and commercial projects.
          </p>
          <p>
            Our approach combines careful planning with hands-on project
            management, ensuring every build meets both structural and
            aesthetic standards from the ground up.
          </p>
        </div>
      </div>
    </section>
  )
}