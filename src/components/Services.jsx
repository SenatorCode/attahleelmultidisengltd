const services = [
  {
    title: 'Building design',
    description: 'Architectural planning and design tailored to the site and client needs.',
  },
  {
    title: 'Construction',
    description: 'Full-scale contracting and construction for residential and commercial buildings.',
  },
  {
    title: 'Renovation',
    description: 'Structural upgrades and remodeling for existing properties.',
  },
  {
    title: 'Project supervision',
    description: 'On-site oversight to keep projects on schedule, budget, and spec.',
  },
]

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold text-slate-900 mb-12">
        What we do
      </h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((service) => (
          <div key={service.title} className="border-t border-slate-200 pt-4">
            <h3 className="font-medium text-slate-900 mb-2">{service.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}