import { Phone, Mail, MapPin } from 'lucide-react';
import { FOOTER_SECTIONS, CONTACT_INFO, SOCIAL_LINKS } from '../../data/content';
import styles from './Footer.module.css';
import logo from '/public/logogeppo.svg';

// Simple social icons as SVG inline
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  </svg>
);

const Footer = () => {
  const handleNav = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contato" className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand Column */}
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <img src={logo} alt="Logo Poéticas Orais" className={styles.logo} />
            <div>
              <span className={styles.logoBemVindo}>bem vindo ao</span>
              <span className={styles.logoName}>poéticas orais</span>
            </div>
          </div>
          <p className={styles.brandDesc}>
            Valorizamos a oralidade, a memória e a cultura popular. A palavra que vem da tradição e transforma.
          </p>
          <div className={styles.socials}>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>

        {/* Nav Sections */}
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title} className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>{section.title}</h4>
            <ul className={styles.linkList}>
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={styles.footerLink}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div className={styles.contact}>
          <h4 className={styles.groupTitle}>Contato</h4>
          <ul className={styles.contactList}>
            <li>
              <Phone size={14} />
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} className={styles.contactLink}>
                {CONTACT_INFO.phone}
              </a>
            </li>
            <li>
              <Mail size={14} />
              <a href={`mailto:${CONTACT_INFO.email}`} className={styles.contactLink}>
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <MapPin size={14} />
              <span className={styles.contactLink}>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p className={styles.copyright}>
            © 2026 Poéticas Orais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;