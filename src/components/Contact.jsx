import { contact } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="bg-paper border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-navy mb-4">Start a project</h2>
          <p className="text-slate-600 leading-relaxed max-w-sm">
            Tell us what you plan to build. We'll get back to you to discuss
            scope, timeline, and next steps.
          </p>
          <a
            href={`https://wa.me/${contact.whatsapp}`}
            className="inline-block mt-8 bg-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-brand transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>
        <dl className="space-y-5">
          <div>
            <dt className="text-sm text-slate-500">WhatsApp and phone</dt>
            <dd>
              <a href={`tel:+${contact.whatsapp}`} className="text-navy font-medium hover:text-brand">
                {contact.phoneDisplay}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Email</dt>
            <dd>
              <a href={`mailto:${contact.email}`} className="text-navy font-medium hover:text-brand break-all">
                {contact.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}