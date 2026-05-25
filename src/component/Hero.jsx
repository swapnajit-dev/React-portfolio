
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
  "Creative Frontend Engineer",
];

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    let timer;
    const word = words[wordIdx];
    if (typing) {
      if (charIdx < word.length) {
        timer = setTimeout(() => { setDisplay(word.slice(0, charIdx + 1)); setCharIdx(c => c + 1); }, speed);
      } else {
        timer = setTimeout(() => setTyping(false), pause);
      }
    } else {
      if (charIdx > 0) {
        timer = setTimeout(() => { setDisplay(word.slice(0, charIdx - 1)); setCharIdx(c => c - 1); }, speed / 2);
      } else {
        setWordIdx(i => (i + 1) % words.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [charIdx, typing, wordIdx, words, speed, pause]);

  return display;
};

const FloatingOrb = ({ style }) => (
  <div style={{
    position: 'absolute', borderRadius: '50%',
    filter: 'blur(80px)', opacity: 0.12, pointerEvents: 'none',
    ...style,
  }} />
);

const GridLines = () => (
  <div style={{
    position: 'absolute', inset: 0, pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '80px 80px',
    maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
  }} />
);

const StatBadge = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
    style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(212,175,55,0.15)',
      borderRadius: '12px',
      padding: '16px 20px',
      backdropFilter: 'blur(20px)',
      textAlign: 'center',
      minWidth: '90px',
    }}
  >
    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '28px', color: '#D4AF37', lineHeight: 1 }}>{number}</div>
    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: '6px', letterSpacing: '0.05em' }}>{label}</div>
  </motion.div>
);

const Hero = () => {
  const role = useTypewriter(ROLES);
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

 useEffect(() => {
  const el = heroRef.current;
  if (!el) return;

  const handleMouse = (e) => {
    const rect = el.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  el.addEventListener('mousemove', handleMouse);

  return () => {
    el.removeEventListener('mousemove', handleMouse);
  };
}, []);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } }
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        background: '#060608',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '72px',
      }}
    >
      {/* Ambient orbs */}
      <FloatingOrb style={{ width: '700px', height: '700px', background: 'radial-gradient(circle, #D4AF37, transparent)', top: '-200px', right: '-200px' }} />
      <FloatingOrb style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, #1a1a4e, transparent)', bottom: '-100px', left: '-100px' }} />
      <FloatingOrb style={{
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(212,175,55,0.5), transparent)',
        top: `${mousePos.y * 60}%`, left: `${mousePos.x * 80}%`,
        transition: 'top 1s ease, left 1s ease',
        opacity: 0.06,
      }} />

      <GridLines />

      {/* Floating code snippet */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '18%', right: '6%',
          background: 'rgba(13,13,18,0.9)',
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: '12px', padding: '16px 20px',
          backdropFilter: 'blur(20px)',
          fontFamily: 'monospace', fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          display: 'none',
        }}
        className="hidden xl:block"
      >
        <span style={{ color: '#D4AF37' }}>const</span>{' '}
        <span style={{ color: '#7eb8f7' }}>dev</span> = {'{'}<br />
        &nbsp;&nbsp;<span style={{ color: '#f78c6c' }}>stack</span>: <span style={{ color: '#c3e88d' }}>'MERN'</span>,<br />
        &nbsp;&nbsp;<span style={{ color: '#f78c6c' }}>passion</span>: <span style={{ color: '#c3e88d' }}>'∞'</span>,<br />
        {'}'};
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute', bottom: '22%', left: '5%',
          background: 'rgba(13,13,18,0.9)',
          border: '1px solid rgba(212,175,55,0.15)',
          borderRadius: '100px', padding: '10px 18px',
          backdropFilter: 'blur(20px)',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}
        className="hidden lg:flex"
      >
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>Available for work</span>
      </motion.div>

      {/* Main content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }}
          className="lg:grid-cols-[1fr,420px]"
        >
          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ maxWidth: '680px' }}
          >
            <motion.div variants={item} style={{ marginBottom: '2rem' }}>
              <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '24px', height: '1px', background: '#D4AF37', display: 'inline-block' }} />
                MCA Student · Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                lineHeight: 1.0,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: '#fff' }}>Hello, I'm</span>
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #D4AF37 30%, #F5D76E 60%, #D4AF37 90%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: 'none',
                display: 'inline-block',
              }}>
                Swapnajit
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={item} style={{ marginBottom: '1.5rem', minHeight: '52px' }}>
              <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                color: 'rgba(255,255,255,0.5)',
              }}>
                <span style={{ color: '#D4AF37' }}>&lt;</span>
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>{role}</span>
                <span className="typewriter-cursor" style={{ color: '#D4AF37', marginLeft: '2px' }}>|</span>
                <span style={{ color: '#D4AF37' }}>/&gt;</span>
              </h2>
            </motion.div>

            <motion.p
              variants={item}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(15px, 1.5vw, 17px)',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.5)',
                maxWidth: '540px',
                marginBottom: '2.5rem',
              }}
            >
              I craft exceptional digital experiences using the MERN stack, Django, and modern animation libraries. 
              Currently pursuing MCA at Nalanda Institute of Technology, turning complex ideas into elegant, performant web applications.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/projects" style={{
                padding: '14px 28px', borderRadius: '10px',
                background: 'linear-gradient(135deg, #D4AF37, #8B6914)',
                color: '#060608', fontFamily: 'Syne, sans-serif', fontWeight: 700,
                fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(212,175,55,0.25)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(212,175,55,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(212,175,55,0.25)'; }}
              >
                View Projects
              </Link>
              <a href="Swapnajit_resume_4.pdf" download style={{
                padding: '14px 28px', borderRadius: '10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(212,175,55,0.25)',
                color: '#fff', fontFamily: 'Syne, sans-serif', fontWeight: 600,
                fontSize: '13px', letterSpacing: '0.08em', textTransform: 'uppercase',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#D4AF37'; e.currentTarget.style.background = 'rgba(212,175,55,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <StatBadge number="5+" label="Projects" delay={0.8} />
              <StatBadge number="2+" label="Years Exp." delay={0.9} />
              <StatBadge number="10+" label="Technologies" delay={1.0} />
            </motion.div>
          </motion.div>

          {/* Right: Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
            className="hidden lg:flex"
          >
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '360px', height: '360px',
                borderRadius: '50%',
                border: '1px dashed rgba(212,175,55,0.25)',
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: '420px', height: '420px',
                borderRadius: '50%',
                border: '1px solid rgba(212,175,55,0.08)',
              }}
            />

            {/* Profile image container */}
            <div style={{
              width: '300px', height: '300px',
              borderRadius: '50%',
              padding: '3px',
              background: 'linear-gradient(135deg, #D4AF37, #8B6914, #D4AF37)',
              boxShadow: '0 0 60px rgba(212,175,55,0.2), 0 0 120px rgba(212,175,55,0.08)',
              position: 'relative', zIndex: 1,
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                background: '#0d0d12',
                overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <img
                  src="/images/DEV2.png"
                  alt="Swapnajit - Developer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a2e,#0d0d18);font-family:Syne,sans-serif;font-size:72px;font-weight:800;background:linear-gradient(135deg,#D4AF37,#F5D76E);-webkit-background-clip:text;-webkit-text-fill-color:transparent">S</div>`;
                  }}
                />
              </div>
            </div>

            {/* Floating tech badges */}
            {[
              { label: 'React', top: '10%', right: '-10%', delay: 1.0 },
              { label: 'Node.js', bottom: '20%', right: '-15%', delay: 1.2 },
              { label: 'MongoDB', bottom: '5%', left: '5%', delay: 1.4 },
            ].map(({ label, delay, ...pos }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{
                  position: 'absolute', ...pos,
                  background: 'rgba(13,13,18,0.95)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '100px', padding: '8px 16px',
                  fontFamily: 'Syne, sans-serif', fontWeight: 700,
                  fontSize: '12px', color: '#D4AF37',
                  backdropFilter: 'blur(20px)',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;