export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <span>© {new Date().getFullYear()} Firm Name. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-900">Instagram</a>
          <a href="#" className="hover:text-slate-900">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}