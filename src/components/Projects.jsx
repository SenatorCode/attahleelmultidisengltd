const projects = [
  { title: 'Residential Duplex — Ibadan', category: 'Residential' },
  { title: 'Office Complex — Lagos', category: 'Commercial' },
  { title: 'Renovation Project', category: 'Renovation' },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-slate-900 mb-12">
          Recent work
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-lg overflow-hidden border border-slate-200">
              <div className="aspect-4/3 bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                [ photo ]
              </div>
              <div className="p-4">
                <p className="text-xs text-slate-500 mb-1">{project.category}</p>
                <h3 className="font-medium text-slate-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}