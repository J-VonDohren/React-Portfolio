import { useState, useEffect, useRef } from "react";

export default function ResumeAI() {
  const [open, setOpen] = useState(true);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I can help recruiters explore Jake’s skills, projects, and experience. Try: “backend”, “cloud”, or “projects”.",
    },
  ]);

  const [input, setInput] = useState("");

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function getResponse(text) {
    const q = text.toLowerCase();

    if (q.includes("backend")) {
      return "Backend: Jake builds REST APIs with Node.js + Express and focuses on scalable design. Check the Featured Projects section (NewsTube) for evidence.";
    }
    if (q.includes("cloud") || q.includes("aws")) {
      return "Cloud/AWS: Jake has hands-on AWS exposure (e.g., S3/EC2 in projects + homelab experimentation) and uses Docker for deployment workflows.";
    }
    if (q.includes("project")) {
      return "Projects: Featured work includes NewsTube (cloud-backed platform), Homelab infrastructure, and a 2D fighter game with AI behaviour. Scroll to Projects for details.";
    }
    if (q.includes("frontend") || q.includes("react") || q.includes("ui")) {
      return "Frontend: Jake builds responsive, component-based UIs using React and Tailwind CSS, focusing on clean layout, usability, and maintainable structure. This portfolio itself demonstrates his frontend approach and design consistency.";
    }
    if (q.includes("homelab") || q.includes("infrastructure") || q.includes("network")) {
      return "Homelab: Jake maintains a personal homelab used to experiment with Linux servers, networking, storage, and deployment workflows. This environment supports hands-on learning in infrastructure, Docker, networking concepts, and system troubleshooting beyond academic coursework.";
    }
    if (q.includes("education") || q.includes("study") || q.includes("university")) {
      return "Education: Jake is currently studying Computer Science at QUT, building a strong foundation in software engineering, data, and systems. His coursework is complemented by extensive self-directed projects and practical experimentation through his homelab.";
    }

    return "Sorry, I don’t understand — try: backend, frontend, projects, cloud, homelab, or education.";
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
    if (type === "cloud") handleSend("Show my cloud/AWS experience");
    if (type === "projects") handleSend("What are my best projects?");
    if (type === "frontend") handleSend("Show my frontend experience");
    if (type === "homelab") handleSend("Tell me about the homelab");
    if (type === "education") handleSend("Tell me about education");
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-50 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg hover:bg-amber-300 transition"
      >
        Ask about Jake
      </button>
    );
  }

  return (
    <div className="fixed right-4 bottom-4 w-80 h-[480px] z-50 bg-slate-900 text-slate-100 rounded-2xl shadow-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <h3 className="font-semibold text-sm">Resume Assistant</h3>
        <button
          onClick={() => setOpen(false)}
          className="text-slate-400 hover:text-slate-200 transition"
          aria-label="Minimise assistant"
        >
          ✕
        </button>
      </div>

      {/* Quick prompts */}
      <div className="flex flex-wrap gap-2 p-3 border-b border-slate-800">
        <button
          onClick={() => handlePrompt("backend")}
          className="text-black rounded-lg bg-amber-400 px-3 py-1 text-xs hover:bg-amber-300 transition"
        >
          Backend
        </button>

        <button
          onClick={() => handlePrompt("frontend")}
          className="text-black rounded-lg bg-amber-400 px-3 py-1 text-xs hover:bg-amber-300 transition"
        >
          Frontend
        </button>

        <button
          onClick={() => handlePrompt("projects")}
          className="text-black rounded-lg bg-amber-400 px-3 py-1 text-xs hover:bg-amber-300 transition"
        >
          Best projects
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
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

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-slate-800">
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
