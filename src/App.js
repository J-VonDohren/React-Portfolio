import "./App.css";
import Navbar from "./Components/NavBar.js";
import ResumeAI from "./Components/ResumeAI.js";
import CertificationsCarousel from "./Components/certificationCarousel.js";
import { SkillTag, TimelineItem, ProjectCard } from "./Components/components.js";

// when updatign files dont forget to redeploy using "npm run deploy"
function App() {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <>
      <Navbar />
      <ResumeAI />

      <div className="h-full text-center bg-[#333333] pb-5">
        <section id="NavBar"></section>

        {/* Landing Page */}
        <section
          id="landingPage"
          className="py-5 scroll-mt-24 min-h-screen bg-slate-900 text-amber-400"
        >
          <div className="mx-auto max-w-6xl w-full px-8 min-h-screen flex flex-col md:flex-row items-center">
            {/* LEFT: about me */}
            <div className="flex-1 space-y-6 py-12 md:py-0">
              <h1 className="font-bold text-left text-2xl text-slate-200">
                Hello I'm Jake
              </h1>

              <p className="text-left text-xl text-amber-300">
                I’m a computer science student at QUT with a strong interest in backend,
                cloud and AI development. I enjoy building scalable applications with
                Node.js and Express, and I use my homelab to experiment with networking,
                infrastructure, and deployment technologies beyond my coursework.
              </p>

              <div className="flex gap-5 items-center">
                {/* GitHub */}
                <a
                  href="https://github.com/J-VonDohren"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-300 hover:text-amber-400 transition"
                >
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.41.36.77 1.07.77 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jake-von-dohren/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-300 hover:text-amber-400 transition"
                >
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C3.34 3.5 2 4.85 2 6.5S3.34 9.5 4.98 9.5 8 8.15 8 6.5 6.62 3.5 4.98 3.5zM2.4 21h5.16V9.98H2.4V21zM9.34 9.98V21h5.16v-6.16c0-1.63.31-3.21 2.32-3.21 1.98 0 2 1.85 2 3.31V21H24V13.84c0-3.52-.75-6.22-4.87-6.22-1.98 0-3.31 1.09-3.85 2.12h-.05V9.98H9.34z" />
                  </svg>
                </a>
              </div>

              <a
                href={`${publicUrl}/Jake_Von_Dohrens_Resume.pdf`}
                download
                className="inline-block rounded-xl bg-amber-400 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-300 transition"
              >
                Download Resume
              </a>
            </div>

            {/* RIGHT: portrait + KPIs */}
            <div className="flex-1 w-full flex flex-col items-center min-h-[400px]">
              <div className="flex justify-center">
                <img
                  src={`${publicUrl}/Img/Self-Portrait.jpg`}
                  alt="Portrait"
                  className="w-64 h-65 object-cover rounded-full border-2 border-amber-400"
                />
              </div>

              <div className="mt-auto pt-10 flex gap-10">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-slate-200">5+</h2>
                  <p className="font-bold text-sm text-slate-300">projects</p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-slate-200">2024</h2>
                  <p className="font-bold text-sm text-slate-300">Programming Since</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 bg-[#333333] py-20">
          <div className="mx-auto max-w-6xl w-full px-6">
            <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-3xl bg-slate-900/90 text-white p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold">Software Engineering</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SkillTag label="Python" />
                  <SkillTag label="Java" />
                  <SkillTag label="C++" />
                  <SkillTag label="JavaScript" />
                  <SkillTag label="Node.js" />
                  <SkillTag label="Tailwind CSS" />
                  <SkillTag label="React" />
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/90 text-white p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold">Cloud & DevOps</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SkillTag label="AWS (S3, EBS, DynamoDB)" />
                  <SkillTag label="Docker" />
                  <SkillTag label="Linux" />
                  <SkillTag label="Git" />
                  <SkillTag label="Apache Kafka" />
                  <SkillTag label="Apache Airflow" />
                  <SkillTag label="Jira" />
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/90 text-white p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold">Data Science & Analytics</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SkillTag label="Pandas / NumPy" />
                  <SkillTag label="Scikit-learn" />
                  <SkillTag label="Tableau" />
                  <SkillTag label="Power BI" />
                  <SkillTag label="SQL" />
                  <SkillTag label="Excel" />
                  <SkillTag label="Google Sheets" />
                  <SkillTag label="Pytorch" />
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/90 text-white p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-2xl font-bold">
                    Infrastructure, Networking & Security
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SkillTag label="Wireshark" />
                  <SkillTag label="Managed Switching" />
                  <SkillTag label="VPN / Port Forwarding" />
                  <SkillTag label="RAID / NAS" />
                  <SkillTag label="Windows / Linux" />
                  <SkillTag label="HTTPS" />
                  <SkillTag label="Network Isolation" />
                  <SkillTag label="Backup & Recovery Testing" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 bg-[#333333] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div className="md:col-span-2">
                <ProjectCard
                  size="large"
                  title="NewsTube"
                  subtitle="Cloud-backed video platform"
                  description="Video platform focused on backend APIs, cloud deployment, and scalable architecture."
                  tech={["Node.js", "Express", "AWS S3", "Docker", "REST APIs"]}
                  highlights={[
                    "Designed & implemented backend REST APIs with various features",
                    "Deployed services using Docker and AWS microservices",
                    "Built media storage and retrieval workflows using lambda functions and S3 Buckets",
                  ]}
                  github="https://github.com/J-VonDohren/Video-Streaming-Web-Application"
                />
              </div>

              <ProjectCard
                title="University Student Planner"
                subtitle="JavaFx Full Stack Application"
                description="Team project planned in Jira that solves issues with pre-existing student planners."
                tech={["Java", "SQL", "Ollama3", "Jira"]}
                highlights={[
                  "Created a user friendly UI/UX",
                  "Collaborated with a team on Jira regularly for roughly 2 months",
                  "Utilsed AI to provide an accurate & personalised timetable",
                ]}
                github="https://github.com/J-VonDohren/University-Student-Planner"
              />

              <ProjectCard
                title="Street Fighter + AI"
                subtitle="Pygame + PyTorch opponent"
                description="A Street Fighter-style game with AI-driven opponent behaviour using PyTorch."
                tech={["Python", "Pygame", "PyTorch"]}
                highlights={[
                  "Built combat loop, hitboxes, and animations",
                  "Designed AI pipeline for opponent decisions",
                  "Tracked metrics for tuning difficulty",
                ]}
                github="https://github.com/J-VonDohren/Street-Fighter-AI"
              />
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 bg-[#333333] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

            <div className="relative border-l border-slate-300 ml-4 space-y-12">
              <TimelineItem
                role="Team Leader"
                company="Domino’s"
                date="2020 - Present"
                points={[
                  "Led and coordinated team operations in a fast-paced environment",
                  "Handled scheduling, conflict resolution, and shift management",
                  "Developed leadership and communication skills under pressure",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="scroll-mt-24 bg-[#333333] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-3xl font-bold text-white mb-12">Education Timeline</h2>

            <div className="relative border-l border-slate-300 ml-4 space-y-12">
              <TimelineItem
                role="Bachelor of IT / Master of Data Science"
                company="Queensland University of Technology"
                date="2024 - Present"
                points={[
                  "Studying software engineering, data science, and systems",
                  "Completed projects in Java, Python, databases, and AWS",
                  "Applied theory through hands-on projects and a personal homelab",
                ]}
              />

              <TimelineItem
                role="Personal Projects & Homelab"
                company="Independent"
                date="2025 - Present"
                points={[
                  "Built backend services using Virtualisation techniques",
                  "Experimented with networking, Linux servers, and infrastructure",
                  "Explored cloud concepts, automation, and deployment workflows",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 bg-[#333333] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-3xl font-bold text-white mb-10">Certifications</h2>

            <CertificationsCarousel
              items={[
                /* {
                  title: "AWS Certified Cloud Practitioner (CLF-C02)",
                  issuer: "Amazon Web Services",
                  date: "Planned Early 2026",
                  badgeSrc: `${publicUrl}/certs/AWS_Cloud_Practitioner.png`,
                },
                {
                  title: "Microsoft Azure AI Fundamentals (AL-900)",
                  issuer: "Microsoft",
                  date: "Planned Early 2026",
                  badgeSrc: `${publicUrl}/certs/Microsoft_Azure_AI_Fundamentals.png`,
                },
                {
                  title: "NVIDIA Certified Associate Generative AI (NCA-GENL)",
                  issuer: "NVIDIA",
                  date: "Planned Mid 2026",
                  badgeSrc: `${publicUrl}/certs/NVIDIA_Gen_AI_LLMs.png`,
                }, */
                {
                  title: "IBM Data Science Professional Certificate",
                  issuer: "IBM / Coursera",
                  date: "Achieved 2024",
                  badgeSrc: `${publicUrl}/certs/IBM_Data_Science.png`,
                },
                {
                  title: "IBM Data Analyst Professional Certificate",
                  issuer: "IBM / Coursera",
                  date: "Achieved 2024",
                  badgeSrc: `${publicUrl}/certs/IBM_Data_Analyst.png`,
                },
              ]}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
