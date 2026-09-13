export default function Navbar() {
  const links = ['About', 'Services', 'Projects', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-slate-900">
          Firm Name
        </span>
        <ul className="hidden md:flex gap-8 text-sm text-slate-600">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-slate-900 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-700 transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  )
}