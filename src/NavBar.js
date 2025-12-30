export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        
        {/* Left: Name / Logo */}
        <a
          href="#landingPage"
          className="text-slate-200 font-bold text-lg hover:text-amber-400 transition"
        >
          Jake Von Dohren
        </a>

        {/* Middle: Nav Links (desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#landingPage" className="hover:text-amber-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-amber-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-amber-400 transition">
            Projects
          </a>
          <a href="#experience" className="hover:text-amber-400 transition">
            Experience
          </a>
          <a href="#education" className="hover:text-amber-400 transition">
            Education
          </a>
          <a href="#certifications" className="hover:text-amber-400 transition">
            Certifications
          </a>
        </div>

        {/* Right: Resume CTA */}
        <a
          href="/Jake_Von_Dohrens_Resume.pdf"
          download
          className="hidden md:inline-block rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
