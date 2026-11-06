import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
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

const spring = { type:'spring', stiffness:180, damping:22, mass:0.8 }
const ease = [0.16, 1, 0.3, 1]

function Reveal({children, className='', delay=0, y=55, amount=0.18}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity:0, y }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true, amount }}
      transition={reduced ? { duration:0 } : { duration:0.85, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function CursorDot({index, x, y}) {
  const sx = useSpring(x, { stiffness:480-index*35, damping:30+index*2, mass:0.5+index*0.05 })
  const sy = useSpring(y, { stiffness:480-index*35, damping:30+index*2, mass:0.5+index*0.05 })
  const colors=['#72ffb5','#59e7ff','#b58cff','#ffbf6b','#8effee','#ff72c8','#a7ff5d']
  const drift = 4 + index * 1.8
  return (
    <motion.div
      className="swarm-cursor"
      style={{ x:sx, y:sy, color:colors[index], scale:1-index*.055 }}
      animate={{ rotate:[0,360], x:[0,drift,0,-drift,0], y:[0,-drift,drift,0,0] }}
      transition={{
        rotate:{ duration:4.5+index*.4, repeat:Infinity, ease:'linear' },
        x:{ duration:2.4+index*.2, repeat:Infinity, ease:'easeInOut' },
        y:{ duration:3+index*.15, repeat:Infinity, ease:'easeInOut' }
      }}
    >
      <b/><span/>
    </motion.div>
  )
}

function CursorSwarm() {
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const reduced = useReducedMotion()
  const [visible,setVisible] = useState(false)

  useEffect(()=>{
    if(reduced) return
    let timer
    const move = e => {
      if(e.pointerType === 'touch') {
        x.set(e.clientX); y.set(e.clientY); setVisible(true)
        clearTimeout(timer)
        timer=setTimeout(()=>setVisible(false),700)
        return
      }
      x.set(e.clientX); y.set(e.clientY); setVisible(true)
    }
    window.addEventListener('pointermove',move,{passive:true})
    return ()=>{ window.removeEventListener('pointermove',move); clearTimeout(timer) }
  },[x,y,reduced])

  if(reduced || !visible) return null
  return <div className="cursor-swarm" aria-hidden="true">{Array.from({length:7},(_,i)=><CursorDot key={i} index={i} x={x} y={y}/>)}</div>
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="scroll-progress" style={{ scaleX:scrollYProgress, transformOrigin:'0% 50%' }}/>
}

function MagneticLink({children,className='',...props}) {
  return (
    <motion.a className={className} whileHover={{ y:-3, scale:1.025 }} whileTap={{ scale:.97 }} transition={spring} {...props}>
      {children}
    </motion.a>
  )
}

function BrowserCard({project,index}) {
  return (
    <motion.div
      className={`browser-card ${project.tone}`}
      initial={{ opacity:0, scale:.92, rotateX:8 }}
      whileInView={{ opacity:1, scale:1, rotateX:0 }}
      viewport={{ once:true, amount:.25 }}
      transition={{ duration:.9, delay:index*.1, ease }}
      whileHover={{ y:-12, rotateX:-2, rotateY:index%2 ? 2 : -2, scale:1.015 }}
      style={{ transformPerspective:1200 }}
    >
      <div className="browser-bar"><span/><span/><span/><code>kalpesh / {project.name.toLowerCase().replaceAll(' ','-')}</code><i>↗</i></div>
      <div className="browser-body">
        <motion.div className="mock-nav" initial={{opacity:0,x:-15}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.35+index*.1,duration:.5}}>
          <b>{project.name}</b><small>{project.tag}</small>
        </motion.div>
        <motion.div className="mock-grid">{[0,1,2,3,4,5].map(i=><motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.45+index*.08+i*.05}} />)}</motion.div>
        <motion.div className="mock-cursor" animate={{x:[0,14,0,-8,0],y:[0,-8,10,0,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>↖</motion.div>
        <div className="card-scanline"/>
      </div>
    </motion.div>
  )
}

function HeroStage() {
  return (
    <motion.div className="swarm-stage" initial={{opacity:0,scale:.88}} animate={{opacity:1,scale:1}} transition={{duration:1.2,delay:.35,ease}}>
      <motion.div className="stage-glow" animate={{scale:[.8,1.2,.8],opacity:[.35,.85,.35]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}/>
      {[['r1',8,1],['r2',11,-1],['r3',14,1]].map(([cls,d,dir])=>(
        <motion.div key={cls} className={`stage-ring ${cls}`} animate={{rotate:[20,20+dir*12,20],y:[0,-10,0],scale:[1,1.035,1]}} transition={{duration:d,repeat:Infinity,ease:'easeInOut'}}/>
      ))}
      <motion.div className="stage-core" animate={{scale:[1,1.055,1]}} transition={{duration:2.8,repeat:Infinity,ease:'easeInOut'}}>
        <motion.span animate={{letterSpacing:['-.12em','-.04em','-.12em']}} transition={{duration:2.8,repeat:Infinity}}>KC</motion.span>
        <small>MOVE<br/>TO<br/>EXPLORE</small>
      </motion.div>
      <motion.div className="stage-label top" animate={{opacity:[.35,1,.35]}} transition={{duration:3,repeat:Infinity}}>MULTI-CURSOR<br/>EXPERIMENT</motion.div>
      <div className="stage-label bottom">REACT · NODE · VUE<br/>MONGO · MYSQL · DOCKER</div>
      {['↖','↗','↙','↘','✦'].map((x,i)=><motion.span key={i} className={`orbit-cursor o${i+1}`} animate={{y:[0,-14,8,0],x:[0,12,-5,0],rotate:[-8,8,-4,-8]}} transition={{duration:3.5+i*.45,repeat:Infinity,ease:'easeInOut',delay:i*.15}}>{x}</motion.span>)}
    </motion.div>
  )
}

function App(){
  const [menu,setMenu]=useState(false)
  const [copied,setCopied]=useState(false)
  const copy=async()=>{try{await navigator.clipboard.writeText('hello@kalpeshchauhan.dev');setCopied(true);setTimeout(()=>setCopied(false),1600)}catch{location.href='mailto:hello@kalpeshchauhan.dev'}}

  return <>
    <CursorSwarm/>
    <ScrollProgress/>
    <div className="noise"/>
    <motion.header className="nav" initial={{y:-80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.8,ease}}>
      <MagneticLink href="#home" className="logo"><motion.span whileHover={{rotate:360}} transition={{duration:.6}}>KC</motion.span><b>KALPESH<br/>CHAUHAN</b></MagneticLink>
      <nav className={menu?'open':''}><a href="#work" onClick={()=>setMenu(false)}>WORK <small>01</small></a><a href="#about" onClick={()=>setMenu(false)}>ABOUT <small>02</small></a><a href="#contact" onClick={()=>setMenu(false)}>CONTACT <small>03</small></a></nav>
      <div className="nav-status"><i/> AVAILABLE FOR WORK</div>
      <motion.button className="hamb" onClick={()=>setMenu(!menu)} whileTap={{scale:.85}}><span/><span/></motion.button>
    </motion.header>

    <main id="home">
      <section className="hero">
        <div className="hero-meta"><motion.span initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{delay:.5}}>FULL STACK DEVELOPER</motion.span><motion.span initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:.6}}>INDIA / 2026</motion.span></div>
        <div className="hero-grid">
          <div className="hero-copy">
            <motion.div className="pill" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.65}}><Zap size={13}/> DIGITAL BUILDER</motion.div>
            <motion.h1 initial={{opacity:0,y:80}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.72,ease}}>I BUILD<br/><em>THE WEB.</em></motion.h1>
            <motion.p initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{delay:.95,duration:.7}}>I’m Kalpesh — a full stack developer building fast products, useful tools and interfaces that feel alive.</motion.p>
            <motion.div className="hero-actions" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.08}}>
              <MagneticLink className="primary" href="#work">VIEW SELECTED WORK <ArrowDownRight size={18}/></MagneticLink>
              <MagneticLink className="text-link" href="#contact">LET'S TALK <MoveUpRight size={15}/></MagneticLink>
            </motion.div>
          </div>
          <HeroStage/>
        </div>
        <motion.div className="hero-strip" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.3}}><span><Terminal size={13}/> BUILDING IN PUBLIC</span><span>SCROLL TO REBUILD <b>↓</b></span><span>01 / 04</span></motion.div>
      </section>

      <section className="work" id="work">
        <Reveal className="section-head"><div><small>02 — SELECTED WORK</small><h2>Things I’ve<br/><em>shipped.</em></h2></div><p>Real products, experiments and client-style builds — made to be used, not just shown.</p></Reveal>
        <div className="projects">{projects.map((p,i)=>(
          <motion.a className="project" href={p.url} target="_blank" rel="noreferrer" key={p.n}
            initial={{opacity:0,y:70}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.8,delay:i*.12,ease}}
            whileHover={{paddingLeft:16}} >
            <div className="project-no">{p.n}</div><BrowserCard project={p} index={i}/>
            <div className="project-info"><div><small>{p.tag}</small><motion.h3 layout>{p.name}</motion.h3><p>{p.type}</p><span className="stack-line">{p.stack}</span></div><motion.span className="arrow" whileHover={{rotate:45,scale:1.12}}>{<ArrowUpRight size={19}/>}</motion.span></div>
          </motion.a>
        ))}</div>
        <Reveal className="more"><span>MORE CODE ON THE REPO</span><MagneticLink href="https://github.com/kalpesh8690" target="_blank" rel="noreferrer">GITHUB <MoveUpRight size={13}/></MagneticLink></Reveal>
      </section>

      <section className="about" id="about">
        <Reveal className="about-left"><small>03 — THE DEVELOPER</small><motion.div className="terminal" initial={{opacity:0,scale:.92}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.25}} transition={{duration:.8,ease}}>
          <div><span/><span/><span/><b>kalpesh@dev:~$</b></div>
          <motion.p initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.25}}>whoami</motion.p><strong>Full Stack Developer</strong>
          <motion.p initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.4}}>stack --list</motion.p><strong>React · Node · MongoDB<br/>MySQL · Vue · Docker</strong>
          <motion.p initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.55}}>status</motion.p><strong className="green">● building useful things</strong>
        </motion.div></Reveal>
        <Reveal className="about-copy" delay=".1"><div className="mini-label">ABOUT ME</div><h2>Code should be<br/><em>useful.</em> Design should<br/>be <em>memorable.</em></h2><p>I work across the stack — from responsive interfaces and animation to APIs, databases and deployment. I like taking messy ideas and turning them into clean, reliable products.</p><div className="skills">{['REACT','NODE.JS','EXPRESS','MONGODB','MYSQL','VUE','TAILWIND','DOCKER','GIT','VERCEL'].map((s,i)=><motion.span key={s} initial={{opacity:0,scale:.7}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:.15+i*.04,type:'spring'}} whileHover={{y:-4,scale:1.05}}>{s}</motion.span>)}</div></Reveal>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top"><span>04 — START A PROJECT</span><span>GUJARAT, INDIA · WORLDWIDE</span></div>
        <motion.h2 initial={{opacity:0,y:90}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{duration:1,ease}}>Have an idea?<br/><em>Let’s build it.</em></motion.h2>
        <motion.button onClick={copy} whileHover={{x:8}} whileTap={{scale:.97}} transition={spring}>{copied?'EMAIL COPIED ✓':'HELLO@KALPESHCHAUHAN.DEV'} <ArrowUpRight size={17}/></motion.button>
        <motion.div className="contact-bottom" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:.3}}><span>NO TEMPLATES. NO BORING PORTFOLIOS.</span><div>{socials.map(({label,href,icon:Icon},i)=><MagneticLink key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} whileHover={{rotate:[0,-8,8,0],scale:1.12}} transition={{delay:i*.05}}><Icon size={17}/></MagneticLink>)}</div></motion.div>
      </section>
    </main>
    <footer><motion.a href="#home" className="footer-logo" whileHover={{scale:1.15,rotate:-5}}>KC.</motion.a><span>DESIGNED + BUILT BY KALPESH CHAUHAN · 2026</span><a href="#home">BACK TO TOP ↑</a></footer>
  </>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)
