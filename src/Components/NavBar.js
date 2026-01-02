import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;
  const navRef = useRef(null);

  // Keep a CSS variable updated with the navbar's REAL height
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setNavHeightVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--nav-h", `${Math.ceil(h)}px`);
    };

    setNavHeightVar();

    const ro = new ResizeObserver(() => setNavHeightVar());
    ro.observe(el);

    window.addEventListener("resize", setNavHeightVar);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setNavHeightVar);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-slate-900 backdrop-blur border-b border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-6 py-3">
          {/* Mobile: stacked layout, Desktop: single row */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Row 1: Name */}
            <div className="flex items-center justify-between">
              <a
                href="#landingPage"
                className="text-slate-200 font-bold text-lg hover:text-amber-400 transition"
              >
                Jake Von Dohren
              </a>
            </div>

            {/* Row 2: Links (mobile + desktop) */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300 md:justify-center">
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

            {/* Row 3: Resume actions (stack on mobile, inline on desktop) */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
              <button
                onClick={() => setShowResume(true)}
                className="w-full md:w-auto rounded-lg border border-amber-400 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-400 hover:text-slate-900 transition"
              >
                View Resume
              </button>

              <a
                href={`${publicUrl}/Jake_Von_Dohrens_Resume.pdf`}
                download
                className="w-full md:w-auto text-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center">
          <div className="relative w-[90vw] h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-900 hover:bg-amber-300 transition"
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
