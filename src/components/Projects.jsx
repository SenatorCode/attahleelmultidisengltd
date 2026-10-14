import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold text-navy mb-12">Work on site</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <figure key={p.caption}>
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="aspect-4/3 w-full object-cover rounded-md bg-slate-200"
            />
            <figcaption className="mt-2 text-sm text-slate-600">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}