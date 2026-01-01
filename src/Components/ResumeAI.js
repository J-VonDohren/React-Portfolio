import { useState, useEffect, useRef } from "react";

export default function ResumeAI({ offsetX = 16, offsetY = 16 }) {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I can help recruiters explore Jake’s skills, projects, and experience. Try: backend, frontend, projects, cloud, homelab, or education.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function getResponse(text) {
    const q = text.toLowerCase();

    if (q.includes("backend"))
      return "Backend: Jake builds REST APIs with Node.js + Express, focusing on scalable, maintainable architectures. The NewsTube project is a strong example.";
    if (q.includes("cloud") || q.includes("aws"))
      return "Cloud: Jake has hands-on AWS experience (S3, EC2, Docker) across projects and his homelab, focusing on deployment workflows and infrastructure concepts.";
    if (q.includes("project"))
      return "Projects: Key work includes NewsTube (cloud-backed platform), a PyTorch-powered fighting game AI, and a documented homelab used for infrastructure experimentation.";
    if (q.includes("frontend") || q.includes("react") || q.includes("ui"))
      return "Frontend: Jake builds responsive UIs using React and Tailwind CSS, focusing on clean layout, usability, and consistency — demonstrated directly by this portfolio.";
    if (q.includes("homelab") || q.includes("infrastructure") || q.includes("network"))
      return "Homelab: Jake runs a personal homelab to experiment with Linux servers, networking, Docker, storage, and automation — reinforcing real-world systems knowledge.";
    if (q.includes("education") || q.includes("study") || q.includes("university"))
      return "Education: Jake is studying Computer Science at QUT, combining formal coursework with extensive self-directed projects and infrastructure experimentation.";

    return "Sorry — try backend, frontend, projects, cloud, homelab, or education.";
  }

  function handleSend(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const reply = getResponse(trimmed);

    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmed },
      { role: "assistant", content: reply },
    ]);

    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSend(input);
  }

  function handlePrompt(type) {
    if (type === "backend") handleSend("Show my backend experience");
    if (type === "frontend") handleSend("Show my frontend experience");
    if (type === "projects") handleSend("What are my best projects?");
    if (type === "cloud") handleSend("Show my cloud experience");
    if (type === "homelab") handleSend("Tell me about the homelab");
    if (type === "education") handleSend("Tell me about education");
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{ right: offsetX, bottom: offsetY }}
        className="fixed z-50 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 transition"
      >
        Ask about my experience
      </button>
    );
  }

  return (
    <div
      style={{
        right: offsetX,
        bottom: offsetY,
        width: "clamp(260px, 42vw, 320px)",
        height: "clamp(280px, 50vh, 480px)", // you can lower min here
      }}
      className="
        fixed z-50 bg-slate-900 text-slate-100 rounded-2xl shadow-xl flex flex-col
        outline outline-1 outline-amber-400
        min-h-0
      "
    >
      {/* Header (fixed height) */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800 flex-shrink-0">
        <h3 className="font-semibold text-sm">Resume Assistant</h3>
        <button
          onClick={() => setOpen(false)}
          className="text-slate-400 hover:text-slate-200 transition"
          aria-label="Minimise assistant"
        >
          ✕
        </button>
      </div>

      {/* Quick prompts (fixed height) */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800 flex-shrink-0">
        <button
          onClick={() => handlePrompt("backend")}
          className="rounded-lg bg-amber-400 px-3 py-1 text-xs font-medium text-black hover:bg-amber-300 transition"
        >
          Backend
        </button>
        <button
          onClick={() => handlePrompt("frontend")}
          className="rounded-lg bg-amber-400 px-3 py-1 text-xs font-medium text-black hover:bg-amber-300 transition"
        >
          Frontend
        </button>
        <button
          onClick={() => handlePrompt("projects")}
          className="rounded-lg bg-amber-400 px-3 py-1 text-xs font-medium text-black hover:bg-amber-300 transition"
        >
          Best projects
        </button>
      </div>

      {/* Messages (this MUST be allowed to shrink) */}
      <div className="flex-1 min-h-0 p-4 overflow-y-auto space-y-3 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === "assistant"
                ? "bg-slate-800 rounded-lg p-3"
                : "bg-amber-400 text-slate-900 rounded-lg p-3 ml-auto"
            }
          >
            {m.content}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input (fixed height) */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800 flex-shrink-0">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about skills, projects, experience…"
            className="flex-1 rounded-lg bg-slate-800 px-3 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
