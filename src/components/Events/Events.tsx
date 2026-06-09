import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS_DATA, FEATURED_EVENT } from '../../data/content';
import styles from './Events.module.css';
import EVENTIMG from '/public/eventimg.jpg'

const Events = () => {
  return (
    <section id="eventos" className={`section ${styles.events}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">Eventos</h2>
            <p className="section-subtitle">
              Participe dos encontros, rodas de conversa, oficinas e apresentações.
            </p>
          </div>
          <a href="#" className="link-arrow">
            Ver todos os eventos <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid: list + featured */}
        <div className={styles.grid}>
          {/* Events List */}
          <div className={styles.eventList}>
            {EVENTS_DATA.map((event, index) => (
              <div key={event.id}>
                <article className={styles.eventItem}>
                  {/* Date */}
                  <div className={styles.date}>
                    <span className={styles.day}>{event.day}</span>
                    <span className={styles.month}>{event.month}</span>
                  </div>

                  {/* Info */}
                  <div className={styles.info}>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}>
                        <Clock size={13} />
                        {event.time}
                      </span>
                    </div>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <span className={styles.location}>
                      <MapPin size={13} />
                      {event.location}
                    </span>
                  </div>

                  <button className={styles.arrowBtn} aria-label={`Ver evento: ${event.title}`}>
                    <ArrowRight size={16} />
                  </button>
                </article>
                {index < EVENTS_DATA.length - 1 && <hr className="divider" />}
              </div>
            ))}
          </div>

          {/* Featured Event Card */}
          <div className={styles.featuredCard}>
            <span className={`badge badge-primary ${styles.featuredBadge}`}>
              {FEATURED_EVENT.badge}
            </span>

            <div className={styles.featuredVisual}>
              {/* Decorative spiral pattern */}
              <div className={styles.imgContainer}>
                <img
                  src={EVENTIMG}
                  alt="Cultura popular e oralidade"
                  loading="eager"
                />
              </div>
            </div>

            <div className={styles.featuredContent}>
              <h3 className={styles.featuredTitle}>
                {FEATURED_EVENT.title}{' '}
                <em className={styles.featuredHighlight}>{FEATURED_EVENT.titleHighlight}</em>
                <br />
                {FEATURED_EVENT.titleEnd}
              </h3>

              <p className={styles.featuredTagline}>{FEATURED_EVENT.tagline}</p>
              <p className={styles.featuredDesc}>{FEATURED_EVENT.description}</p>

              <button className="btn btn-primary">
                {FEATURED_EVENT.cta}
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
