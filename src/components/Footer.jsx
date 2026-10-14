import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-3 text-sm">
        <span>
          © {new Date().getFullYear()} {company.name} RC {company.rc}
        </span>
        <span>{company.slogan.join(' ')}</span>
      </div>
    </footer>
  )
}