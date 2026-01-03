import { useEffect, useState } from "react";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;

  // Prevent background scrolling when modal is open (important on iOS)
  useEffect(() => {
    if (!showResume) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showResume]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 backdrop-blur border-b border-slate-800">
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

          {/* Right: Resume actions (desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowResume(true)}
              className="rounded-lg border border-amber-400 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition"
            >
              View Resume
            </button>

            <a
              href={`${publicUrl}/Jake_Von_Dohrens_Resume.pdf`}
              download
              className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Mobile layout (taller instead of hiding) */}
        <div className="md:hidden px-6 pb-3">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
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

          <div className="mt-3 grid grid-cols-1 gap-3">
            <button
              onClick={() => setShowResume(true)}
              className="w-full rounded-lg border border-amber-400 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition"
            >
              View Resume
            </button>

            <a
              href={`${publicUrl}/Jake_Von_Dohrens_Resume.pdf`}
              download
              className="w-full text-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-0 sm:p-6">
          {/* Fullscreen on mobile to avoid Safari vh issues, 90vh on desktop */}
          <div className="relative w-full h-[100dvh] sm:h-[90vh] sm:max-w-5xl bg-slate-900 overflow-hidden rounded-none sm:rounded-2xl shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-900 hover:bg-amber-300 transition"
              aria-label="Close resume"
            >
              ✕
            </button>

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
