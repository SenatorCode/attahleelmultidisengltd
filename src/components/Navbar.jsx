import { useState } from 'react'
import logo from '../assets/logo.jpeg'
import { company, contact } from '../data/content'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why us', href: '#why-us' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" aria-label={company.name}>
          <img src={logo} alt={company.name} className="h-11 w-auto" />
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/${contact.whatsapp}`}
          className="hidden md:inline-block text-sm font-medium bg-navy text-white px-4 py-2 rounded-md hover:bg-brand transition-colors"
        >
          Request a quote
        </a>

        <button
          className="md:hidden text-sm font-medium text-navy"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3 text-slate-700">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}