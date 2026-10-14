import { whyUs, commitment, hse, clients } from '../data/content'

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <h2 className="text-2xl font-semibold mb-8">Why choose us</h2>
            <ul className="space-y-3 text-slate-200">
              {whyUs.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="font-semibold mb-3">Our commitment</h3>
              <p className="text-slate-300 leading-relaxed">{commitment}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Health, safety and environment</h3>
              <p className="text-slate-300 leading-relaxed">{hse}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20">
          <h3 className="font-semibold mb-4">Who we work with</h3>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-slate-300">
            {clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}