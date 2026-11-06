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
