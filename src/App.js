import React, { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

const skills = [
  { group: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Authentication", "MERN / MEVN / SERN"] },
  { group: "Database", items: ["MongoDB", "MySQL", "SQL Server", "Stored Procedures", "Query Optimization"] },
  { group: "Tools & delivery", items: ["Git & GitHub", "Docker", "Postman", "IIS", "API Performance"] },
];
const projects = [
  { name: "Hotel Management System", type: "Web app", description: "BCA final-year MERN project with single-room and multiple-room booking workflows; focused on the frontend experience.", stack: ["MERN", "React", "MongoDB"], live: "", code: "https://github.com/kalpesh8690/Hotel-Management-System" },
  { name: "MRK Storage", type: "Web app", description: "A live web project with a responsive interface and practical navigation.", stack: ["Web UI", "Responsive design"], live: "https://mrkstorage.vercel.app", code: "https://github.com/kalpesh8690" },
  { name: "Developer Portfolio", type: "Web app", description: "Personal portfolio showcasing skills, education, certifications, and development projects.", stack: ["React", "JavaScript", "CSS"], live: "https://kalpeshchauhan.vercel.app", code: "https://github.com/kalpesh8690/Portfolio" },
];
const roles = ["Full-Stack Developer", "React & Node.js Developer", "API & Database Developer"];
const navItems = [["Home", "home"], ["About", "about"], ["Skills", "skills"], ["Work", "work"], ["Experience", "experience"], ["Education", "education"], ["Contact", "contact"]];

function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("portfolio-theme") !== "light"; } catch { return true; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [roleIndex, setRoleIndex] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    try { localStorage.setItem("portfolio-theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);
  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((n) => (n + 1) % roles.length), 2800);
    return () => window.clearInterval(timer);
  }, []);

  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((p) => p.type === activeFilter),
    [activeFilter]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ type: "loading", message: "Sending your message…" });
    const nameParts = form.name.trim().split(" ").filter(Boolean);
    const data = {
      firstname: nameParts.shift() || "",
      lastname: nameParts.join(" "),
      email: form.email,
      mobile: "",
      massage: form.message
    };
    try {
      await emailjs.send("service_ws78up5", "template_9742swp", data, "oj4lKfX0MYT7JQlEO");
      setFormStatus({ type: "success", message: "Message sent successfully. Thanks for reaching out!" });
      setForm({ name: "", email: "", message: "" });
    } catch {
      setFormStatus({ type: "error", message: "Your message could not be sent. Please use the WhatsApp or GitHub link instead." });
    }
  };

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Kalpesh Chauhan home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">kalpesh<span>.dev</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? "✕" : "☰"}</button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navItems.map(([label, id]) => <a key={id} href={"#" + id} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setDark((v) => !v)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? "☼" : "☾"}</button>
          <a className="button button-small button-outline" href="#contact">Let's talk <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR THE RIGHT OPPORTUNITY</div>
            <h1>Building digital<br />experiences that <span className="gradient-text">work.</span></h1>
            <p className="hero-lead">Hey, I'm <strong>Kalpesh Chauhan</strong> — a developer who turns complex problems into fast, thoughtful, and reliable web applications.</p>
            <div className="role-line"><span className="role-prefix">I build as a</span> <span className="role-value">{roles[roleIndex]}</span><span className="caret">|</span></div>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↗</span></a>
              <a className="button button-ghost" href="/resume.html" target="_blank" rel="noreferrer">View résumé <span>↓</span></a>
            </div>
            <div className="social-row"><a href="https://github.com/kalpesh8690" target="_blank" rel="noreferrer">GitHub ↗</a><span className="social-separator">/</span><a href="https://kalpeshchauhan.vercel.app" target="_blank" rel="noreferrer">Live portfolio ↗</a><span className="social-separator">/</span><a href="#contact">Get in touch ↗</a></div>
          </div>
          <div className="hero-visual" aria-label="Developer profile card">
            <div className="visual-glow" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="profile-card">
              <div className="card-topline"><span className="window-dots"><i /><i /><i /></span><span>PROFILE / 001</span></div>
              <div className="profile-image-wrap"><img src="/mypic.png" alt="Kalpesh Chauhan" onError={(e) => { e.currentTarget.style.display = "none"; }} /><div className="profile-fallback">KC</div></div>
              <h2>Kalpesh Chauhan</h2><p className="profile-role">Full-Stack Developer</p>
              <div className="profile-tags"><span>React</span><span>Node.js</span><span>SQL</span></div>
              <div className="profile-bottom"><span><span className="status-dot" /> Building & learning</span><span className="profile-code">{"</>"}</span></div>
            </div>
            <div className="float-chip chip-top"><span className="chip-icon">✳</span><span><b>Clean code</b><small>Built to scale</small></span></div>
            <div className="float-chip chip-bottom"><span className="chip-icon chip-icon-purple">⌘</span><span><b>Full-stack</b><small>UI to database</small></span></div>
            <div className="visual-caption">DESIGN MINDFUL. ENGINEERING DRIVEN.</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="trust-strip"><div className="trust-inner"><span className="strip-label">WORKING ACROSS THE STACK</span>{["React", "Node.js", "MongoDB", "MySQL", "SQL Server", "Docker"].map((s) => <span className="tech-word" key={s}>{s}</span>)}</div></section>

        <section className="section-wrap content-section about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid"><div><h2 className="section-heading">Curious by nature.<br /><span className="muted-heading">Practical by design.</span></h2></div><div className="about-content"><p className="large-copy">I enjoy building products that feel simple on the surface and are thoughtfully engineered underneath.</p><p>My work spans frontend interfaces, backend APIs, database design, and performance troubleshooting. I care about maintainability, useful details, and making software that solves real problems—not just looks good in a screenshot.</p><a className="text-link" href="#contact">A little more about working together <span>↗</span></a></div></div>
          <div className="stats-grid"><div className="stat-card"><span className="stat-number">01<span>—</span></span><span className="stat-label">Product-minded UI</span><p>Responsive interfaces with clear hierarchy and accessible interactions.</p></div><div className="stat-card"><span className="stat-number">02<span>—</span></span><span className="stat-label">Reliable backend</span><p>Maintainable APIs, thoughtful data flows, and useful integrations.</p></div><div className="stat-card"><span className="stat-number">03<span>—</span></span><span className="stat-label">Performance first</span><p>Diagnosing bottlenecks and improving how applications behave at scale.</p></div></div>
        </section>

        <section className="skills-section" id="skills"><div className="section-wrap content-section"><div className="section-kicker">02 / TOOLKIT</div><div className="section-title-row"><h2 className="section-heading">Tools I use to<br /><span className="muted-heading">make things happen.</span></h2><p className="section-intro">A practical toolkit across frontend, backend, data, and delivery. Always learning, always refining.</p></div><div className="skill-grid">{skills.map((group, index) => <article className="skill-card" key={group.group}><div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-symbol">{["◈", "⌘", "▤", "↗"][index]}</span></div><h3>{group.group}</h3><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></section>

        <section className="section-wrap content-section work-section" id="work"><div className="section-kicker">03 / SELECTED WORK</div><div className="section-title-row"><h2 className="section-heading">A few things I've<br /><span className="muted-heading">worked on.</span></h2><p className="section-intro">A snapshot of personal work and the kind of problems I like to solve. Explore the live projects or browse the code.</p></div><div className="project-toolbar"><span className="project-count">{String(filteredProjects.length).padStart(2, "0")} PROJECTS</span><div className="filter-list">{["All", "Web app", "Backend"].map((filter) => <button key={filter} className={activeFilter === filter ? "filter-button active" : "filter-button"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div></div><div className="project-grid">{filteredProjects.map((project, index) => <article className="project-card" key={project.name}><div className={"project-art art-" + (index % 3)}><div className="art-browser"><div className="art-browser-bar"><i /><i /><i /><span>{project.name.toLowerCase().replace(/\s+/g, "-")}.app</span></div><div className="art-content"><span className="art-overline">FEATURED PROJECT / 0{index + 1}</span><div className="art-big-shape">{index === 0 ? "MRK" : index === 1 ? "KC." : "{ API }"}</div><div className="art-lines"><i /><i /><i /></div><div className="art-mini-cards"><i /><i /><i /></div></div></div><span className="project-type">{project.type}</span></div><div className="project-info"><div className="project-heading"><h3>{project.name}</h3><span className="project-arrow">↗</span></div><p>{project.description}</p><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live preview ↗</a>}<a href={project.code} target="_blank" rel="noreferrer">View code ↗</a></div></div></article>)}</div></section>

        <section className="experience-section" id="experience"><div className="section-wrap content-section"><div className="section-kicker">04 / EXPERIENCE & APPROACH</div><div className="experience-grid"><div><h2 className="section-heading">Thoughtful work.<br /><span className="muted-heading">Steady growth.</span></h2><p className="section-intro">I bring a hands-on mindset to the full development cycle—from understanding a requirement to shipping and improving the solution.</p><a className="text-link" href="/resume.html" target="_blank" rel="noreferrer">Open résumé <span>↗</span></a></div><div className="timeline"><article className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">FRONTEND ENGINEERING</span><h3>Interfaces people can use</h3><p>Build responsive React experiences with reusable components, consistent styling, and accessible controls.</p></article><article className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">BACKEND DEVELOPMENT</span><h3>APIs that do the heavy lifting</h3><p>Develop Node.js services and integrations, with attention to validation, reliability, and clear data contracts.</p></article><article className="timeline-item"><span className="timeline-dot" /><span className="timeline-label">DATA & PERFORMANCE</span><h3>Make the data flow better</h3><p>Work with MongoDB and SQL databases, optimize queries, and investigate slow or resource-intensive workflows.</p></article></div></div></div></section>

        <section className="education-section" id="education"><div className="section-wrap content-section"><div className="section-kicker">05 / EDUCATION & CERTIFICATIONS</div><div className="section-title-row"><h2 className="section-heading">The foundation.<br /><span className="muted-heading">The ongoing learning.</span></h2><p className="section-intro">A computer applications background and hands-on learning across core web technologies.</p></div><div className="education-grid"><article className="education-card"><span className="education-year">2019 — 2022</span><span className="education-icon">⌘</span><h3>Bachelor of Computer Applications (BCA)</h3><p className="education-school">Smt. K. S. Kapasi BCA College, Palitana</p><p className="education-note">Maharaja Krishnakumarsinhji Bhavnagar University · First Class</p></article><article className="education-card"><span className="education-year">2018 — 2019</span><span className="education-icon">↗</span><h3>Higher Secondary (HSC)</h3><p className="education-school">Smt. P. M. Patel High School, Ghedi</p><p className="education-note">Arts stream</p></article></div><h3 className="cert-heading">Certificates & credentials</h3><div className="cert-grid"><a className="cert-card" href="https://www.sololearn.com/Certificate/1097-386568/pdf/" target="_blank" rel="noreferrer"><span>01 / SOLOLEARN</span><strong>React + Redux</strong><small>Issued August 2022 · View credential ↗</small></a><a className="cert-card" href="https://www.sololearn.com/Certificate/1014-386568/pdf/" target="_blank" rel="noreferrer"><span>02 / SOLOLEARN</span><strong>HTML5</strong><small>Issued August 2022 · View credential ↗</small></a><a className="cert-card" href="https://www.sololearn.com/Certificate/1023-386568/pdf/" target="_blank" rel="noreferrer"><span>03 / SOLOLEARN</span><strong>CSS3</strong><small>Issued August 2022 · View credential ↗</small></a><a className="cert-card" href="https://www.sololearn.com/certificates/course/en/386568/1024/landscape/png" target="_blank" rel="noreferrer"><span>04 / SOLOLEARN</span><strong>JavaScript</strong><small>Issued August 2022 · View credential ↗</small></a></div></div></section>

        <section className="contact-section" id="contact"><div className="section-wrap content-section"><div className="section-kicker">06 / CONTACT</div><div className="contact-grid"><div className="contact-copy"><h2 className="section-heading">Have a good<br />problem? <span className="gradient-text">Let's solve it.</span></h2><p>Have a project in mind, an opportunity, or just want to talk tech? Send a message and let's start a conversation.</p><a className="contact-email" href="https://api.whatsapp.com/send?phone=918690361133&text=Hello%20Kalpesh" target="_blank" rel="noreferrer">Message me on WhatsApp <span>↗</span></a><div className="contact-socials"><a href="https://github.com/kalpesh8690" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://kalpeshchauhan.vercel.app" target="_blank" rel="noreferrer">Portfolio ↗</a></div></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" placeholder="How should I call you?" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /><label htmlFor="message">What are you thinking?</label><textarea id="message" name="message" rows="4" placeholder="A little context about your project or idea..." required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /><button className="button button-primary form-submit" type="submit" disabled={formStatus.type === "loading"}>{formStatus.type === "loading" ? "Sending…" : "Send message"} <span>↗</span></button>{formStatus.message && <p className={"form-note form-status " + formStatus.type} role="status">{formStatus.message}</p>}<p className="form-note">Your message is sent securely through the portfolio contact service.</p></form></div></div></section>
      </main>
      <footer className="site-footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">kalpesh<span>.dev</span></span></a><span>Designed with care · Built with React</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Kalpesh Chauhan</span></footer>
    </div>
  );
}
export default App;
