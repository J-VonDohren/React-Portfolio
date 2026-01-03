import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;

  const navRef = useRef(null);

  // Measure nav height and write it to a CSS variable so the page can pad correctly.
  const updateNavHeight = () => {
    if (!navRef.current) return;
    const h = navRef.current.offsetHeight;
    document.documentElement.style.setProperty("--nav-h", `${h}px`);
  };

  useLayoutEffect(() => {
    updateNavHeight();
  }, []);

  useEffect(() => {
    updateNavHeight();

    // Update on resize / orientation change.
    window.addEventListener("resize", updateNavHeight);

    // Update when the navbar changes height (wraps, fonts load, etc.).
    const ro = new ResizeObserver(() => updateNavHeight());
    if (navRef.current) ro.observe(navRef.current);

    return () => {
      window.removeEventListener("resize", updateNavHeight);
      ro.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-slate-900 backdrop-blur border-b border-slate-800"
      >
        <div className="mx-auto max-w-6xl px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Top row (mobile): Name */}
          <a
            href="#landingPage"
            className="text-slate-200 font-bold text-lg hover:text-amber-400 transition"
          >
            Jake Von Dohren
          </a>

          {/* Links (wrap on mobile instead of hiding) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-300">
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

          {/* Buttons (stack on mobile, inline on md+) */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
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
      </nav>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center">
          <div className="relative w-[92vw] h-[92vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl">
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
