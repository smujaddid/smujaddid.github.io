import type { Locale } from '../i18n/ui'

export const profile = {
  name: 'Sibghatullah Mujaddid',
  nickname: 'Agha',
  location: {
    en: 'Maros, South Sulawesi, Indonesia',
    id: 'Maros, Sulawesi Selatan, Indonesia',
  },
  bio: {
    en: 'Software Engineer specialized in backend and infrastructure. My favorite languages, tools, and frameworks are JavaScript, TypeScript, Node.js, NestJS, and Docker. With more than 11 years of experience I have built APIs, SaaS platforms, and scalable systems.',
    id: 'Software Engineer yang berfokus pada backend dan infrastruktur. Bahasa, tools, dan framework favorit saya adalah JavaScript, TypeScript, Node.js, NestJS, dan Docker. Dengan pengalaman lebih dari 11 tahun saya telah membangun API, platform SaaS, dan sistem yang skalabel.',
  },
  spokenLanguages: ['Bahasa Indonesia', 'English'],
}

export const skills: {
  group: { en: string; id: string }
  items: { name: string; icon: string; rating: 1 | 2 | 3 }[]
}[] = [
  {
    group: { en: 'Languages', id: 'Bahasa Pemrograman' },
    items: [
      { name: 'TypeScript', icon: 'simple-icons:typescript', rating: 3 },
      { name: 'JavaScript', icon: 'simple-icons:javascript', rating: 3 },
      { name: 'PHP', icon: 'simple-icons:php', rating: 2 },
      { name: 'Dart', icon: 'simple-icons:dart', rating: 2 },
      { name: 'Java', icon: 'simple-icons:openjdk', rating: 1 },
      { name: 'C#', icon: 'simple-icons:dotnet', rating: 1 },
      { name: 'Go', icon: 'simple-icons:go', rating: 1 },
    ],
  },
  {
    group: { en: 'Backend', id: 'Backend' },
    items: [
      { name: 'Node.js', icon: 'simple-icons:nodedotjs', rating: 3 },
      { name: 'NestJS', icon: 'simple-icons:nestjs', rating: 3 },
      { name: 'Express', icon: 'simple-icons:express', rating: 3 },
      { name: 'Fastify', icon: 'simple-icons:fastify', rating: 3 },
      { name: 'Laravel', icon: 'simple-icons:laravel', rating: 2 },
      { name: 'Spring Boot', icon: 'simple-icons:springboot', rating: 1 },
    ],
  },
  {
    group: { en: 'Frontend', id: 'Frontend' },
    items: [
      { name: 'Tailwind CSS', icon: 'simple-icons:tailwindcss', rating: 3 },
      { name: 'Astro', icon: 'simple-icons:astro', rating: 2 },
      { name: 'Vue', icon: 'simple-icons:vuedotjs', rating: 2 },
      { name: 'Nuxt', icon: 'simple-icons:nuxtdotjs', rating: 1 },
    ],
  },
  {
    group: { en: 'Database', id: 'Database' },
    items: [
      { name: 'MongoDB', icon: 'simple-icons:mongodb', rating: 3 },
      { name: 'MySQL', icon: 'simple-icons:mysql', rating: 3 },
      { name: 'SQLite', icon: 'simple-icons:sqlite', rating: 2 },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', rating: 2 },
      { name: 'Redis', icon: 'simple-icons:redis', rating: 2 },
    ],
  },
  {
    group: { en: 'Mobile', id: 'Mobile' },
    items: [
      { name: 'Flutter', icon: 'simple-icons:flutter', rating: 2 },
      { name: 'Android', icon: 'simple-icons:android', rating: 2 },
    ],
  },
  {
    group: { en: 'Infrastructure', id: 'Infrastruktur' },
    items: [
      { name: 'Linux', icon: 'simple-icons:linux', rating: 3 },
      { name: 'Docker', icon: 'simple-icons:docker', rating: 3 },
      { name: 'AWS EC2', icon: 'simple-icons:amazonec2', rating: 3 },
      { name: 'AWS S3', icon: 'simple-icons:amazons3', rating: 3 },
      { name: 'Dokploy & Traefik', icon: 'simple-icons:traefikproxy', rating: 3 },
    ],
  },
]

export type ExperienceItem = {
  period: { en: string; id: string }
  position: { en: string; id: string }
  company: string
  location?: string
  description: { en: string; id: string }
}

export const experience: ExperienceItem[] = [
  {
    period: { en: 'Sept 2024 – Present', id: 'Sept 2024 – Sekarang' },
    position: { en: 'Software Engineer', id: 'Software Engineer' },
    company: 'The Sign Pack',
    location: 'Remote',
    description: {
      en: 'Engineering the backend systems and APIs. Built TSP 3.0 from scratch using NestJS, TypeScript, and MongoDB. Migrated legacy systems to modern architecture.',
      id: 'Merancang sistem backend dan API. Membangun TSP 3.0 dari nol menggunakan NestJS, TypeScript, dan MongoDB. Migrasi sistem legacy ke arsitektur modern.',
    },
  },
  {
    period: { en: 'May 2017 – Present', id: 'Mei 2017 – Sekarang' },
    position: { en: 'Co-Founder & Lead Engineer', id: 'Co-Founder & Lead Engineer' },
    company: 'ReadyDok',
    location: 'Bandung',
    description: {
      en: 'SaaS for clinics and doctors — appointment booking, scheduling, patient retention, and reputation management.',
      id: 'SaaS untuk klinik dan dokter — booking jadwal, manajemen pasien, dan pengelolaan reputasi.',
    },
  },
  {
    period: { en: 'Aug 2021 – Mar 2025', id: 'Agu 2021 – Mar 2025' },
    position: { en: 'Software Engineer', id: 'Software Engineer' },
    company: 'PT Inovasi Riset Indonesia',
    location: 'Bandung',
    description: {
      en: 'Built client APIs in JavaScript, Node.js, Express.js, Fastify, Go, Java, Spring Boot, MySQL, and MongoDB. Occasional UI work in Vue, Nuxt, and Tailwind.',
      id: 'Membangun API untuk klien dengan JavaScript, Node.js, Express.js, Fastify, Go, Java, Spring Boot, MySQL, dan MongoDB. Kadang juga menangani UI menggunakan Vue, Nuxt, dan Tailwind.',
    },
  },
  {
    period: { en: 'Jan 2016 – Feb 2017', id: 'Jan 2016 – Feb 2017' },
    position: {
      en: 'Full-Stack Developer (Outsourcing)',
      id: 'Full-Stack Developer (Outsourcing)',
    },
    company: 'PT Bina Reka Cipta Utama',
    location: 'Bandung',
    description: {
      en: 'ASP.NET developer for the Structural and Pipeline Integrity Management Systems (Mubadala Petroleum, Nusantara Regas).',
      id: 'Developer ASP.NET untuk sistem Structural dan Pipeline Integrity Management (Mubadala Petroleum, Nusantara Regas).',
    },
  },
  {
    period: { en: 'Sept 2013 – Apr 2015', id: 'Sept 2013 – Apr 2015' },
    position: { en: 'Junior Java Developer', id: 'Junior Java Developer' },
    company: 'PT Inovasi Riset Indonesia',
    location: 'Bandung',
    description: {
      en: 'Payment gateway using the ISO-8583 specification, for PT Infomedia Nusantara.',
      id: 'Payment gateway berbasis spesifikasi ISO-8583, untuk PT Infomedia Nusantara.',
    },
  },
  {
    period: { en: 'May 2011 – Sept 2014', id: 'Mei 2011 – Sept 2014' },
    position: {
      en: 'Co-Founder & Mobile Game Developer',
      id: 'Co-Founder & Mobile Game Developer',
    },
    company: 'Phinisi Studio',
    location: 'Bandung',
    description: {
      en: 'Shipped two mobile games: "Cacoon: Goes to Indonesia" (Android) and "Annoying Jelly" (iOS).',
      id: 'Merilis dua game mobile: "Cacoon: Goes to Indonesia" (Android) dan "Annoying Jelly" (iOS).',
    },
  },
  {
    period: { en: 'Apr 2012 – Oct 2012', id: 'Apr 2012 – Okt 2012' },
    position: { en: 'Junior Java Developer', id: 'Junior Java Developer' },
    company: 'R&D Center Telekomunikasi Indonesia',
    location: 'Bandung',
    description: {
      en: 'Java / J2ME programmer for a mobile store application.',
      id: 'Programmer Java / J2ME untuk aplikasi mobile store.',
    },
  },
]

export const education = [
  {
    period: '2007 – 2013',
    institution: 'Institut Teknologi Bandung (ITB)',
    degree: { en: 'Undergraduate, Computer Science', id: 'Sarjana, Ilmu Komputer' },
  },
]

export const honors = [
  {
    name: 'AGI University Grant Competition',
    detail: { en: 'STK Engine category winner', id: 'Pemenang kategori STK Engine' },
  },
  {
    name: 'INAICTA 2011',
    detail: { en: 'Mobile Games category finalist', id: 'Finalis kategori Mobile Games' },
  },
]

export function localize<T extends { en: string; id: string }>(value: T, locale: Locale): string {
  return value[locale]
}
