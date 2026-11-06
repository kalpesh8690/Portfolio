import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight, Sparkles } from 'lucide-react'
import './styles.css'

const projects = [
  { n: '01', name: 'MRK Storage', type: 'Cloud storage platform', stack: 'Vue · Node.js · MongoDB', year: '2026', tone: 'violet', url: 'https://mrkstorage.vercel.app' },
  { n: '02', name: 'DukaanFlow', type: 'Tools for small businesses', stack: 'React Native · Expo · Node.js', year: '2026', tone: 'lime', url: 'https://github.com/kalpesh8690/dukaanflow' },
  { n: '03', name: 'Sriyanshi Photo', type: 'Photography experience', stack: 'React · Node.js · MongoDB', year: '2026', tone: 'peach', url: 'https://sriyanshiphoto.vercel.app' },
]
const socials = [
  { label: 'GitHub', href: 'https://github.com/kalpesh8690', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kalpesh-chauhan-07632b194/', icon: Linkedin },
  { label: 'Email', href: 'mailto:hello@kalpeshchauhan.dev', icon: Mail },
]

function CursorSwarm() {
  const swarmRef = useRef(null)
  const pointer = useRef({ x: -200, y: -200 })
  const followers = useRef([])
  const raf = useRef(0)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return
    const colors = ['#c5f36a', '#c8b8ff', '#ff9c7a', '#8ed9d0', '#f4c96b']
    const container = swarmRef.current
    if (!container) return
    container.innerHTML = ''
    const count = 5
    followers.current = Array.from({ length: count }, (_, i) => {
      const node = document.createElement('div')
      node.className = 'swarm-cursor'
      node.style.setProperty('--swarm-color', colors[i])
      node.innerHTML = '<span></span>'
      container.appendChild(node)
      return { node, x: -200, y: -200, delay: 0.13 + i * 0.035, angle: (Math.PI * 2 * i) / count }
    })
    const onMove = (event) => { pointer.current = { x: event.clientX, y: event.clientY } }
    const animate = () => {
      followers.current.forEach((follower, index) => {
        const target = index === 0
          ? pointer.current
          : {
              x: pointer.current.x + Math.cos(follower.angle + performance.now() * 0.00045) * (13 + index * 5),
              y: pointer.current.y + Math.sin(follower.angle + performance.now() * 0.00045) * (13 + index * 5),
            }
        follower.x += (target.x - follower.x) * follower.delay
        follower.y += (target.y - follower.y) * follower.delay
        follower.node.style.transform = `translate3d(${follower.x}px, ${follower.y}px, 0) translate(-50%, -50%) scale(${1 - index * 0.09})`
      })
      raf.current = requestAnimationFrame(animate)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    raf.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf.current)
      container.innerHTML = ''
      followers.current = []
    }
  }, [])
  return <div ref={swarmRef} className="cursor-swarm" aria-hidden="true" />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('hello@kalpeshchauhan.dev')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = 'mailto:hello@kalpeshchauhan.dev'
    }
  }

  return (
    <>
      <CursorSwarm />
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Kalpesh Chauhan home"><span className="brand-mark">K<span>.</span></span><span>Kalpesh Chauhan</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work <span>01</span></a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About <span>02</span></a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact <span>03</span></a>
        </nav>
        <a className="availability" href="#contact"><i /> Available for opportunities</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><span /><span /></button>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-topline"><span>INDEPENDENT DEVELOPER · INDIA</span><span>LAT 21.76° N — LONG 72.15° E</span></div>
          <div className="hero-copy">
            <p className="eyebrow"><Sparkles size={14} /> BUILDING DIGITAL THINGS WITH PURPOSE</p>
            <h1>Ideas into<br /><em>interfaces.</em></h1>
            <div className="hero-bottom">
              <p className="hero-intro">I'm Kalpesh — a full stack developer who loves turning complex problems into simple, thoughtful digital experiences.</p>
              <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={25} /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative 3D shapes">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-sphere"><div className="sphere-shine" /></div>
            <div className="art-cube"><span /><span /><span /></div>
            <div className="art-caption">CURIOUS BY DEFAULT<br />CREATING BY DESIGN</div>
            <div className="art-sticker">✳<small>MAKE IT<br />MATTER</small></div>
          </div>
          <div className="hero-footer"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 04</span></div>
        </section>

        <section className="work section-wrap" id="work">
          <div className="section-heading"><div><p className="eyebrow">A FEW THINGS I'VE MADE</p><h2>Selected <em>work.</em></h2></div><p className="section-note">A mix of experiments, products<br />and ideas brought to life.</p></div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-row" href={project.url} target="_blank" rel="noreferrer" key={project.n}>
                <span className="project-number">{project.n}</span>
                <div className={`project-visual ${project.tone}`}><div className="visual-window"><span /><span /><span /><div className="visual-lines" /><div className="visual-dot" /></div></div>
                <div className="project-info"><h3>{project.name}</h3><p>{project.type}</p><small>{project.stack}</small></div>
                <span className="project-year">{project.year}</span><span className="project-arrow"><ArrowUpRight size={22} /></span>
              </a>
            ))}
          </div>
          <div className="work-foot"><span>MORE EXPERIMENTS IN THE WORKSHOP</span><a href="https://github.com/kalpesh8690" target="_blank" rel="noreferrer">VISIT GITHUB <MoveUpRight size={14} /></a></div>
        </section>

        <section className="about section-wrap" id="about">
          <div className="about-label"><p className="eyebrow">A LITTLE ABOUT ME</p><span>02 — THE HUMAN BEHIND THE CODE</span></div>
          <div className="about-content"><h2>Making the web<br />feel a little more <em>human.</em></h2><p>I work across the stack — from shaping clean interfaces to building reliable APIs and data-driven systems. I enjoy learning new tools, exploring better ways to solve problems, and shipping work that is genuinely useful.</p><p>Currently focused on thoughtful product development with React, Node.js, and modern JavaScript technologies.</p>
            <div className="skills"><span>REACT</span><span>NODE.JS</span><span>EXPRESS</span><span>MONGODB</span><span>MYSQL</span><span>VUE</span><span>TAILWIND</span><span>DOCKER</span></div>
          </div>
          <div className="about-index">K—26</div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-kicker"><span>HAVE A GOOD ONE IN MIND?</span><span>03 — LET'S TALK</span></div>
          <h2>Let's make<br /><em>something good.</em></h2>
          <button className="email-link" onClick={copyEmail}>{copied ? 'EMAIL COPIED ✓' : 'HELLO@KALPESHCHAUHAN.DEV'} <ArrowUpRight size={18} /></button>
          <div className="contact-bottom"><span>BASED IN GUJARAT, INDIA · WORKING EVERYWHERE</span><div className="socials">{socials.map(({ label, href, icon: Icon }) => <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer"><Icon size={17} /></a>)}</div></div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">K<span>.</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY © 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
