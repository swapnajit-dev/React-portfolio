
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location.pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/education', label: 'Education' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(6,6,8,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,175,55,0.1)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #D4AF37, #8B6914)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '16px', color: '#060608',
              boxShadow: '0 0 20px rgba(212,175,55,0.3)',
            }}>S</div>
            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '18px', color: '#fff', letterSpacing: '0.02em' }}>
              Swapnajit
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
            {links.map(({ to, label }) => (
              <Link
                key={to} to={to}
                style={{
                  textDecoration: 'none',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: isActive(to) ? '#D4AF37' : 'rgba(255,255,255,0.7)',
                  transition: 'color 0.3s',
                  position: 'relative',
                  paddingBottom: '2px',
                }}
                onMouseEnter={e => { if (!isActive(to)) e.target.style.color = '#fff'; }}
                onMouseLeave={e => { if (!isActive(to)) e.target.style.color = 'rgba(255,255,255,0.7)'; }}
              >
                {label}
                {isActive(to) && (
                  <span style={{
                    position: 'absolute', bottom: '-4px', left: 0, right: 0,
                    height: '1px', background: '#D4AF37',
                    boxShadow: '0 0 8px rgba(212,175,55,0.8)',
                  }} />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="jeet_resume.pdf" download
            className="hidden md:flex"
            style={{
              padding: '8px 20px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #D4AF37, #8B6914)',
              color: '#060608', fontFamily: 'Syne, sans-serif', fontWeight: 700,
              fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
              textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 20px rgba(212,175,55,0.2)',
            }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 30px rgba(212,175,55,0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.2)'; }}
          >
            Resume
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'none', padding: '8px', color: '#fff' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', width: '22px' }}>
              <span style={{ height: '1.5px', background: isMenuOpen ? '#D4AF37' : '#fff', transition: 'all 0.3s', transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none', display: 'block', borderRadius: '2px' }} />
              <span style={{ height: '1.5px', background: '#D4AF37', transition: 'all 0.3s', opacity: isMenuOpen ? 0 : 1, display: 'block', borderRadius: '2px' }} />
              <span style={{ height: '1.5px', background: isMenuOpen ? '#D4AF37' : '#fff', transition: 'all 0.3s', transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none', display: 'block', borderRadius: '2px' }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div style={{
            background: 'rgba(6,6,8,0.98)', backdropFilter: 'blur(24px)',
            borderTop: '1px solid rgba(212,175,55,0.1)',
            padding: '1.5rem 2rem 2rem',
            animation: 'slideUp 0.3s ease',
          }}>
            {links.map(({ to, label }) => (
              <Link
                key={to} to={to}
                style={{
                  display: 'block', padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  textDecoration: 'none',
                  fontFamily: 'Syne, sans-serif', fontWeight: 600, fontSize: '20px',
                  color: isActive(to) ? '#D4AF37' : 'rgba(255,255,255,0.8)',
                }}
              >
                {label}
              </Link>
            ))}
            <a href="Swapnajit_resume_4.pdf" download style={{
              display: 'block', marginTop: '1.5rem', padding: '14px',
              background: 'linear-gradient(135deg, #D4AF37, #8B6914)',
              color: '#060608', textAlign: 'center', borderRadius: '10px',
              fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '14px',
              letterSpacing: '0.1em', textDecoration: 'none',
            }}>Download Resume</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;