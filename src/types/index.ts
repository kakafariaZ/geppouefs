// ============================================
// POÉTICAS ORAIS — TypeScript Types
// ============================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Event {
  id: number;
  day: string;
  month: string;
  time: string;
  title: string;
  location: string;
  featured?: boolean;
  featuredTitle?: string;
  featuredSubtitle?: string;
  featuredDescription?: string;
  featuredTagline?: string;
}

export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
