import { ArrowRight, ArrowDown } from 'lucide-react';
import { HERO_DATA } from '../../data/content';
// Coloque mestrefoto.jpg dentro de /public e use a URL direta
const FOTO_BG = '/mestrefoto.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  const handleClick = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className={styles.hero}>
      {/* Background image */}
      <div className={styles.imageBg}>
        <img
          src={FOTO_BG}
          alt="Cultura popular e oralidade"
          loading="eager"
        />
        <div className={styles.imageOverlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <p className={styles.tagline}>{HERO_DATA.tagline}</p>
          <h1 className={styles.heading}>
            <span className={styles.headingDark}>{HERO_DATA.titleLine1}</span>
            <span className={styles.headingGreen}>
              {HERO_DATA.titleLine2}<br />{HERO_DATA.titleLine3}
            </span>
          </h1>
          <p className={styles.subtitle}>{HERO_DATA.subtitle}</p>

          <div className={styles.actions}>
            <button
              className="btn btn-primary"
              onClick={() => handleClick(HERO_DATA.ctaPrimary.href)}
            >
              {HERO_DATA.ctaPrimary.label}
              <ArrowRight size={16} />
            </button>
            <button
              className={`btn ${styles.btnSecondary}`}
              onClick={() => handleClick(HERO_DATA.ctaSecondary.href)}
            >
              {HERO_DATA.ctaSecondary.label}
              <ArrowDown size={16} />
            </button>
          </div>
        </div>

        {/* Carousel indicators */}
        <div className={styles.indicators} aria-label="Indicadores do carrossel">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === 0 ? styles.dotActive : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
