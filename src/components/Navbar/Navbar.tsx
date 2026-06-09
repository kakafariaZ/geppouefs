import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/content';
import styles from './Navbar.module.css';
// Coloque logogeppo.svg dentro de /public e use a URL direta
const logo = '/logogeppo.svg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const onScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trava o scroll do body quando o drawer está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 10);
    }
  }, []);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <a href="#inicio" className={styles.logo} onClick={() => handleNavClick('#inicio')}>
            <div className={styles.logoIcon}>
              <img src={logo} alt="Logo Geppo" className={styles.logoSvg} />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoSub}>bem vindo ao</span>
              <span className={styles.logoMain}>poéticas orais</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} aria-label="Menu principal">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${activeSection === link.href.replace('#', '') ? styles.active : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA desktop */}
          <a
            href="#contato"
            className={`${styles.ctaBtn} btn btn-primary`}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
          >
            Acompanhe
          </a>

          {/* Botão hamburguer */}
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.toggleOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ---- Drawer lateral (mobile) ---- */}

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.open : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`${styles.drawer} ${menuOpen ? styles.open : ''}`}
        aria-label="Menu de navegação"
        aria-hidden={!menuOpen}
      >
        {/* Header do drawer */}
        <div className={styles.drawerHeader}>
          <a
            href="#inicio"
            className={styles.drawerLogo}
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          >
            <img src={logo} alt="Logo" className={styles.drawerLogoIcon} />
            <div className={styles.drawerLogoText}>
              <span className={styles.drawerLogoSub}>bem vindo ao</span>
              <span className={styles.drawerLogoMain}>poéticas orais</span>
            </div>
          </a>
          <button
            className={styles.drawerClose}
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <nav>
          <ul className={styles.drawerNavList}>
            {NAV_LINKS.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href} style={{ '--i': i } as React.CSSProperties}>
                  <a
                    href={link.href}
                    className={`${styles.drawerNavLink} ${isActive ? styles.activeDrawer : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  >
                    {link.label}
                    <span className={styles.drawerArrow}>
                      <ArrowRight size={11} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer do drawer */}
        <div className={styles.drawerFooter}>
          <a
            href="#contato"
            className={`btn btn-primary ${styles.drawerCta}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contato'); }}
          >
            Acompanhe
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
