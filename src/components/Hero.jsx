export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-4">
          Architecture & Civil Engineering
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
          We design and build structures that last.
        </h1>
        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-md">
          From concept to completion, we handle design, construction, and
          project supervision for residential and commercial buildings.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors"
        >
          Start a project
        </a>
      </div>
      <div className="bg-slate-100 rounded-lg aspect-4/3 flex items-center justify-center text-slate-400 text-sm">
        [ project photo placeholder ]
      </div>
    </section>
  )
}