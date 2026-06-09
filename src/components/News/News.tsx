import { ArrowRight } from 'lucide-react';
import { NEWS_DATA } from '../../data/content';
import type { NewsItem } from '../../types';
import styles from './News.module.css';

const NewsCard = ({ item }: { item: NewsItem }) => (
  <article className={styles.card}>
    <div className={styles.imageWrapper}>
      <img
        src={item.imageUrl}
        alt={item.title}
        loading="lazy"
        className={styles.image}
      />
      <span className={`badge badge-primary ${styles.categoryBadge}`}>
        {item.category}
      </span>
    </div>
    <div className={styles.cardBody}>
      <time className={styles.date}>{item.date}</time>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.excerpt}>{item.excerpt}</p>
      <a href="#" className={styles.readMore} aria-label={`Ler mais: ${item.title}`}>
        <ArrowRight size={14} />
      </a>
    </div>
  </article>
);

const News = () => {
  return (
    <section id="noticias" className={`section ${styles.news}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h2 className="section-title">Notícias</h2>
          </div>
          <a href="#" className="link-arrow">
            Ver todas as notícias <ArrowRight size={14} />
          </a>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {NEWS_DATA.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
