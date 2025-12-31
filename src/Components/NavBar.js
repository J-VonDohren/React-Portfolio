import { useState } from "react";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          
          {/* Left: Name */}
          <a
            href="#landingPage"
            className="text-slate-200 font-bold text-lg hover:text-amber-400 transition"
          >
            Jake Von Dohren
          </a>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#landingPage" className="hover:text-amber-400 transition">About</a>
            <a href="#skills" className="hover:text-amber-400 transition">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
            <a href="#experience" className="hover:text-amber-400 transition">Experience</a>
            <a href="#education" className="hover:text-amber-400 transition">Education</a>
            <a href="#certifications" className="hover:text-amber-400 transition">Certifications</a>
          </div>

          {/* Right: Resume actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* View Resume */}
            <button
              onClick={() => setShowResume(true)}
              className="rounded-lg border border-amber-400 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition"
            >
              View Resume
            </button>

            {/* Download Resume */}
            <a
              href={`${publicUrl}/Jake_Von_Dohrens_Resume.pdf`}
              download
              className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center">
          <div className="relative w-[90vw] h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            
            {/* Close button */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-900 hover:bg-amber-300 transition"
              aria-label="Close resume"
            >
              ✕
            </button>

            {/* PDF */}
            <iframe
              src={`${publicUrl}/Jake_Von_Dohrens_Resume.pdf`}
              title="Resume PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
