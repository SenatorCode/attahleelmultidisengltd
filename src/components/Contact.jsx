export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">
            Get in touch
          </h2>
          <p className="text-slate-600 leading-relaxed max-w-sm">
            Reach out to discuss your project — we typically respond within
            a day.
          </p>
        </div>
        <div className="space-y-3 text-slate-700">
          <p>
            <span className="text-slate-500 text-sm block">Phone</span>
            +234 000 000 0000
          </p>
          <p>
            <span className="text-slate-500 text-sm block">Email</span>
            contact@firmname.com
          </p>
          <p>
            <span className="text-slate-500 text-sm block">WhatsApp</span>
            <a href="#" className="underline hover:text-slate-900">Chat with us</a>
          </p>
          <p>
            <span className="text-slate-500 text-sm block">Location</span>
            Ibadan, Nigeria
          </p>
        </div>
      </div>
    </section>
  )
}