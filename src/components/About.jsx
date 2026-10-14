import { overview, vision, mission, values } from '../data/content'

export default function About() {
  return (
    <section id="about" className="bg-paper border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <h2 className="text-2xl font-semibold text-navy">About us</h2>
          <div className="md:col-span-2 space-y-4 text-slate-600 leading-relaxed">
            {overview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-semibold text-navy mb-3">Our vision</h3>
            <p className="text-slate-600 leading-relaxed">{vision}</p>
          </div>
          <div>
            <h3 className="font-semibold text-navy mb-3">Our mission</h3>
            <ul className="space-y-2 text-slate-600 leading-relaxed list-disc pl-5 marker:text-brand">
              {mission.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-semibold text-navy mb-6">Our core values</h3>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-brand pt-3">
                <dt className="font-semibold text-navy">{v.title}</dt>
                <dd className="mt-1 text-sm text-slate-600 leading-relaxed">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}