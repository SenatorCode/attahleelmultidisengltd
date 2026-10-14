import hero from '../assets/projects/site-1.jpeg'
import { company, contact } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative isolate bg-navy text-white">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-[center_35%] opacity-40"
      />
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-40">
        <p className="text-sky font-medium mb-5">RC {company.rc}</p>
        <h1 className="font-bold text-4xl md:text-6xl leading-tight max-w-3xl">
          {company.slogan[0]}
          <br />
          {company.slogan[1]}
        </h1>
        <p className="mt-6 text-lg text-slate-200 max-w-xl leading-relaxed">
          Registered engineering and construction company for residential and
          commercial buildings, from architectural design to site supervision.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            className="bg-white text-navy px-6 py-3 rounded-md font-semibold hover:bg-sky transition-colors"
          >
            Request a quote
          </a>
          <a
            href="#services"
            className="border border-white/60 px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors"
          >
            Our services
          </a>
        </div>
      </div>
    </section>
  )
}