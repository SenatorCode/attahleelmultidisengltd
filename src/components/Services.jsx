import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold text-navy mb-12">What we do</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {services.map((group) => (
          <div key={group.title} className="border-t-2 border-navy pt-4">
            <h3 className="font-semibold text-lg text-navy mb-4">{group.title}</h3>
            <ul className="space-y-2 text-slate-600">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}