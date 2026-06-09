// ============================================
// POÉTICAS ORAIS — Static Content Data
// Edit this file to update all site content
// ============================================

import type { NavLink, Event, NewsItem, FooterSection } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Contato', href: '#contato' },
];

export const HERO_DATA = {
  tagline: 'bem vindo ao poéticas orais',
  titleLine1: 'A força da palavra',
  titleLine2: 'que vem da',
  titleLine3: 'tradição.',
  subtitle: 'Celebramos a cultura popular, a memória e a sabedoria transmitida pela voz.',
  ctaPrimary: { label: 'Conheça o projeto', href: '#sobre' },
  ctaSecondary: { label: 'Saiba mais', href: '#eventos' },
  // Replace with your actual hero image
  imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
};

export const EVENTS_DATA: Event[] = [
  {
    id: 1,
    day: '01',
    month: 'JUN',
    time: '14:00',
    title: 'Roda de Causos',
    location: 'Centro Cultural Oralitá',
    featured: false,
  },
  {
    id: 2,
    day: '18',
    month: 'JUN',
    time: '16:30',
    title: 'Oficina de Poesia Oral',
    location: 'Casa de Cultura de Itapuã',
    featured: false,
  },
  {
    id: 3,
    day: '19',
    month: 'JUN',
    time: '19:00',
    title: 'Sarau Poéticas e Tradições',
    location: 'Auditório do Museu da Cidade',
    featured: false,
  },
];

export const FEATURED_EVENT = {
  badge: 'DESTAQUE',
  title: 'Rede',
  titleHighlight: 'moinho ',
  titleEnd: 'de Saberes',
  tagline: 'Um encontro para ouvir, compartilhar e celebrar a palavra que vem da voz.',
  description: 'Venha vivenciar histórias, cantos e rimas que mantêm vivas nossas raízes e inspiram novos caminhos.',
  cta: 'Quero participar',
};

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    category: 'CULTURA',
    date: '12 MAI. 2024',
    title: 'Festival de Poéticas Orais celebra memória e resistência',
    excerpt: 'Evento reuniu mestres, jovens e comunidade em dias de troca e...',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
  },
  {
    id: 2,
    category: 'CULTURA',
    date: '05 MAI. 2024',
    title: 'Mestre Zé do Repente é homenageado em Itapuã',
    excerpt: 'Reconhecimento a uma vida dedicada à cultura popular e à oralidade.',
    imageUrl: 'https://images.unsplash.com/photo-1501386761578-eaa54b5d4e27?w=600&q=80',
  },
  {
    id: 3,
    category: 'CULTURA',
    date: '28 ABR. 2024',
    title: 'Oficina de Poesia Oral forma novos poetas',
    excerpt: 'Jovens artistas exploram a força da palavra em atividade imersiva.',
    imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    id: 4,
    category: 'CULTURA',
    date: '20 ABR. 2024',
    title: 'A importância da oralidade na educação',
    excerpt: 'Como a tradição oral fortalece identidades e saberes.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
  },
  {
    id: 5,
    category: 'CULTURA',
    date: '15 ABR. 2024',
    title: 'Sarau lota o auditório com histórias e rimas',
    excerpt: 'Noite de encantamento e celebração da cultura popular.',
    imageUrl: 'https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?w=600&q=80',
  },
  {
    id: 6,
    category: 'CULTURA',
    date: '10 ABR. 2024',
    title: 'Projeto leva cultura popular às escolas da região',
    excerpt: 'Iniciativa promove rodas de conversa, música e poesia com estudantes.',
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=600&q=80',
  },
];

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Navegação',
    links: [
      { label: 'Início', href: '#inicio' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Eventos', href: '#eventos' },
      { label: 'Notícias', href: '#noticias' },
      { label: 'Contato', href: '#contato' },
    ],
  },
  {
    title: 'Projeto',
    links: [
      { label: 'Quem somos', href: '#sobre' },
      { label: 'Objetivos', href: '#sobre' },
      { label: 'Parceiros', href: '#sobre' },
      { label: 'Apoie', href: '#contato' },
    ],
  },
];

export const CONTACT_INFO = {
  phone: '(71) 99999-9999',
  email: 'contato@poeticasorais.org.br',
  address: 'Prédio da Pós - UEFS - Feira de Santana, BA',
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
};
