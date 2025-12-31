export function SkillTag({ label, variant = "blue" }) {
  const styles =
    variant === "green"
      ? "border-emerald-400/70 text-emerald-300 bg-emerald-500/10"
      : "border-sky-400/70 text-sky-300 bg-sky-500/10";

  return (
    <div
      className={[
        "flex items-center gap-3 rounded-xl border px-4 py-3",
        "hover:scale-[1.01] transition",
        styles,
      ].join(" ")}
    >
      <span className="font-semibold">{label}</span>
    </div>
  );
}

export function TimelineItem({ role, company, date, points }) {
  return (
    <div className="relative pl-10">
      {/* Timeline dot */}
      <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-amber-400 border-4 border-slate-100"></span>

      {/* Timeline card */}
      <div className="rounded-3xl bg-slate-900/90 text-slate-100 p-8 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-xl font-bold">
            {role} <span className="text-amber-400">@ {company}</span>
          </h3>
          <span className="text-sm text-slate-400 mt-2 sm:mt-0">
            {date}
          </span>
        </div>

        <ul className="space-y-3 text-slate-300">
          {points.map((point, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export function ProjectCard({
  size = "normal",
  title,
  subtitle,
  description,
  tech,
  highlights,
  github,
  demo,
}) {
  const isLarge = size === "large";

  return (
    <div
      className={[
        "rounded-3xl bg-slate-900/90 text-slate-100 shadow-xl",
        "p-8 flex flex-col",
        isLarge ? "md:p-10" : "",
      ].join(" ")}
    >
      <div className={isLarge ? "md:flex md:items-start md:justify-between md:gap-10" : ""}>
        <div className="flex-1">
          <div className="mb-4">
            <h3 className={isLarge ? "text-3xl font-bold" : "text-2xl font-bold"}>
              {title}
            </h3>
            <p className="text-amber-400 text-sm mt-1">{subtitle}</p>
          </div>

          <p className="text-slate-300 mb-6">{description}</p>

          <ul className="space-y-3 mb-6">
            {highlights.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0"></span>
                <span className="text-slate-300">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={isLarge ? "flex-1" : ""}>
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, i) => (
              <span
                key={i}
                className="rounded-lg border border-sky-400/40 bg-sky-500/10 px-3 py-1 text-sm text-sky-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-amber-400 hover:underline"
              >
                GitHub →
              </a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-slate-300 hover:underline"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}