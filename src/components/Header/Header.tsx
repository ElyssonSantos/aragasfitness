import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Planos', href: '#planos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container container">
        <a href="#home" className="logo">
          <img src="/images/logo-nova.png" alt="Aragas Fitness Logo" className="header-logo-img" />
          <span className={`logo-text ${isScrolled ? 'visible' : ''}`}>
            ARAGAS <span className="text-green">FITNESS</span>
          </span>
        </a>

        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="https://wa.me/5579998153958" target="_blank" rel="noopener noreferrer" className="header-cta desktop-only">
          Fale Conosco
        </a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X color="#FFFFFF" size={28} /> : <Menu color="#FFFFFF" size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://wa.me/5579998153958"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
        >
          FALAR NO WHATSAPP
        </a>
      </div>
    </header>
  );
}
