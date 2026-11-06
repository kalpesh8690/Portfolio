import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useMotionValue, useReducedMotion, useSpring, useTime, useTransform } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight, Terminal, Zap } from 'lucide-react'
import './styles.css'

const projects = [
  { n:'01', name:'MRK Storage', type:'Cloud storage platform', stack:'Vue · Node.js · MongoDB', tag:'STORAGE', tone:'cyan', url:'https://mrkstorage.vercel.app' },
  { n:'02', name:'DukaanFlow', type:'Tools for small businesses', stack:'React Native · Expo · Node.js', tag:'PRODUCT', tone:'green', url:'https://github.com/kalpesh8690/dukaanflow' },
  { n:'03', name:'Sriyanshi Photo', type:'Photography experience', stack:'React · Node.js · MongoDB', tag:'CREATIVE', tone:'purple', url:'https://sriyanshiphoto.vercel.app' },
]

const socials = [
  { label:'GitHub', href:'https://github.com/kalpesh8690', icon:Github },
  { label:'LinkedIn', href:'https://www.linkedin.com/in/kalpesh-chauhan-07632b194/', icon:Linkedin },
  { label:'Email', href:'mailto:hello@kalpeshchauhan.dev', icon:Mail },
]

function SwarmFollower({index, pointerX, pointerY}) {
  const time = useTime()
  const xSpring = useSpring(pointerX, { stiffness: 520 - index * 35, damping: 32 + index * 2, mass: 0.55 + index * 0.06 })
  const ySpring = useSpring(pointerY, { stiffness: 520 - index * 35, damping: 32 + index * 2, mass: 0.55 + index * 0.06 })
  const radius = 7 + index * 5
  const angle = (index * Math.PI * 2) / 7

  const x = useTransform(() => xSpring.get() + Math.cos(angle + time.get() * 0.0012) * radius)
  const y = useTransform(() => ySpring.get() + Math.sin(angle + time.get() * 0.0012) * radius)

  const colors=['#72ffb5','#59e7ff','#b58cff','#ffbf6b','#8effee','#ff72c8','#a7ff5d']

  return (
    <motion.div
      className="swarm-cursor"
      style={{
        x,
        y,
        color: colors[index],
        scale: 1 - index * 0.055,
        opacity: 0.98 - index * 0.06,
      }}
    >
      <b />
      <span />
    </motion.div>
  )
}

function CursorSwarm(){
  const pointerX=useMotionValue(-300)
  const pointerY=useMotionValue(-300)
  const reducedMotion=useReducedMotion()
  const [enabled,setEnabled]=useState(false)
  const [hasPointer,setHasPointer]=useState(false)

  useEffect(()=>{
    if(reducedMotion) return

    const finePointer=window.matchMedia('(pointer:fine)')
    const updateEnabled=()=>setEnabled(finePointer.matches)
    updateEnabled()
    finePointer.addEventListener?.('change',updateEnabled)

    const move=(e)=>{
      if(e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return
      pointerX.set(e.clientX)
      pointerY.set(e.clientY)
      setHasPointer(true)
    }

    window.addEventListener('pointermove',move,{passive:true})
    return()=>{
      finePointer.removeEventListener?.('change',updateEnabled)
      window.removeEventListener('pointermove',move)
    }
  },[pointerX,pointerY,reducedMotion])

  if(!enabled || reducedMotion) return null

  return (
    <div className="cursor-swarm" aria-hidden="true">
      {Array.from({length:7},(_,index)=>(
        <SwarmFollower key={index} index={index} pointerX={pointerX} pointerY={pointerY} />
      ))}
      {!hasPointer && <span className="swarm-wait">MOVE</span>}
    </div>
  )
}

function BrowserCard({project}){
  return <div className={`browser-card ${project.tone}`}>
    <div className="browser-bar"><span/><span/><span/><code>kalpesh / {project.name.toLowerCase().replaceAll(' ','-')}</code><i>↗</i></div>
    <div className="browser-body"><div className="mock-nav"><b>{project.name}</b><small>{project.tag}</small></div><div className="mock-grid"><div/><div/><div/><div/><div/><div/></div><div className="mock-cursor">↖</div></div>
  </div>
}

function App(){
  const [menu,setMenu]=useState(false)
  const [copied,setCopied]=useState(false)
  const copy=async()=>{try{await navigator.clipboard.writeText('hello@kalpeshchauhan.dev');setCopied(true);setTimeout(()=>setCopied(false),1600)}catch{location.href='mailto:hello@kalpeshchauhan.dev'}}

  return <>
    <CursorSwarm/>
    <div className="noise"/>
    <header className="nav">
      <a href="#home" className="logo"><span>KC</span><b>KALPESH<br/>CHAUHAN</b></a>
      <nav className={menu?'open':''}><a href="#work">WORK <small>01</small></a><a href="#about">ABOUT <small>02</small></a><a href="#contact">CONTACT <small>03</small></a></nav>
      <div className="nav-status"><i/> AVAILABLE FOR WORK</div>
      <button className="hamb" onClick={()=>setMenu(!menu)}><span/><span/></button>
    </header>

    <main id="home">
      <section className="hero">
        <div className="hero-meta"><span>FULL STACK DEVELOPER</span><span>INDIA / 2026</span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="pill"><Zap size={13}/> DIGITAL BUILDER</div>
            <h1>I BUILD<br/><em>THE WEB.</em></h1>
            <p>I’m Kalpesh — a full stack developer building fast products, useful tools and interfaces that feel alive.</p>
            <div className="hero-actions"><a className="primary" href="#work">VIEW SELECTED WORK <ArrowDownRight size={18}/></a><a className="text-link" href="#contact">LET'S TALK <MoveUpRight size={15}/></a></div>
          </div>
          <div className="swarm-stage">
            <div className="stage-glow"/>
            <div className="stage-ring r1"/><div className="stage-ring r2"/><div className="stage-ring r3"/>
            <div className="stage-core"><span>KC</span><small>CLICK<br/>TO<br/>EXPLORE</small></div>
            <div className="stage-label top">MULTI-CURSOR<br/>EXPERIMENT</div>
            <div className="stage-label bottom">REACT · NODE · VUE<br/>MONGO · MYSQL · DOCKER</div>
            {['↖','↗','↙','↘','✦'].map((x,i)=><span key={i} className={`orbit-cursor o${i+1}`}>{x}</span>)}
          </div>
        </div>
        <div className="hero-strip"><span><Terminal size={13}/> BUILDING IN PUBLIC</span><span>SCROLL TO REBUILD <b>↓</b></span><span>01 / 04</span></div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><div><small>02 — SELECTED WORK</small><h2>Things I’ve<br/><em>shipped.</em></h2></div><p>Real products, experiments and client-style builds — made to be used, not just shown.</p></div>
        <div className="projects">{projects.map(p=><a className="project" href={p.url} target="_blank" rel="noreferrer" key={p.n}><div className="project-no">{p.n}</div><BrowserCard project={p}/><div className="project-info"><div><small>{p.tag}</small><h3>{p.name}</h3><p>{p.type}</p></div><span className="arrow"><ArrowUpRight size={19}/></span></div></a>)}</div>
        <div className="more"><span>MORE CODE ON THE REPO</span><a href="https://github.com/kalpesh8690" target="_blank" rel="noreferrer">GITHUB <MoveUpRight size={13}/></a></div>
      </section>

      <section className="about" id="about">
        <div className="about-left"><small>03 — THE DEVELOPER</small><div className="terminal"><div><span/><span/><span/><b>kalpesh@dev:~$</b></div><p>whoami</p><strong>Full Stack Developer</strong><p>stack --list</p><strong>React · Node · MongoDB<br/>MySQL · Vue · Docker</strong><p>status</p><strong className="green">● building useful things</strong></div></div>
        <div className="about-copy"><div className="mini-label">ABOUT ME</div><h2>Code should be<br/><em>useful.</em> Design should<br/>be <em>memorable.</em></h2><p>I work across the stack — from responsive interfaces and animation to APIs, databases and deployment. I like taking messy ideas and turning them into clean, reliable products.</p><div className="skills">{['REACT','NODE.JS','EXPRESS','MONGODB','MYSQL','VUE','TAILWIND','DOCKER','GIT','VERCEL'].map(s=><span key={s}>{s}</span>)}</div></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top"><span>04 — START A PROJECT</span><span>GUJARAT, INDIA · WORLDWIDE</span></div>
        <h2>Have an idea?<br/><em>Let’s build it.</em></h2>
        <button onClick={copy}>{copied?'EMAIL COPIED ✓':'HELLO@KALPESHCHAUHAN.DEV'} <ArrowUpRight size={17}/></button>
        <div className="contact-bottom"><span>NO TEMPLATES. NO BORING PORTFOLIOS.</span><div>{socials.map(({label,href,icon:Icon})=><a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon size={17}/></a>)}</div></div>
      </section>
    </main>
    <footer><a href="#home" className="footer-logo">KC.</a><span>DESIGNED + BUILT BY KALPESH CHAUHAN · 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
  </>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
