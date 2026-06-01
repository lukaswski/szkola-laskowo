// ─── Dane ogólne ────────────────────────────────────────────────────────────

export const SITE = {
  title: 'Niepubliczna Szkoła Podstawowa w Laskowie',
  description:
    'Oficjalna strona Szkoły Podstawowej w Laskowie — aktualności, ogłoszenia i informacje dla rodziców i uczniów.',
  nameLine1: 'Niepubliczna',
  nameLine2: 'Szkoła Podstawowa',
  nameLine3: 'w Laskowie',
};

// ─── Dane kontaktowe ─────────────────────────────────────────────────────────

export const CONTACT = {
  addressLine1: 'Laskowo 26,',
  addressLine2: '88-430 Janowiec Wielkopolski',
  phone: '(52) 30 23 251',
  email: 'sp.laskowo@o2.pl',
};

// ─── Nawigacja ────────────────────────────────────────────────────────────────

export const NAV = [
  { label: 'Strona główna', href: '/' },
  { label: 'Aktualności', href: '/aktualnosci' },
  { label: 'Plany lekcji', href: '/plany-lekcji' },
  { label: 'O szkole', href: '/about' },
];

// ─── Strona główna ───────────────────────────────────────────────────────────

export const HOME = {
  hero: {
    badge: 'Rok szkolny 2025/2026',
    headingLine1: 'Szkoła Podstawowa',
    headingLine2: 'w Laskowie',
    headingLine3: '',
    subheading:
      'Miejsce, gdzie uczniowie rozwijają pasje, zdobywają wiedzę i tworzą przyjaźnie na całe życie.',
    ctaNews: 'Aktualności',
    ctaAbout: 'O szkole',
  },

  stats: [
    { value: '40+', label: 'lat tradycji' },
    { value: '25', label: 'uczniów' },
    { value: '11', label: 'przedszkolaków' },
    { value: '7', label: 'klas' },
  ],

  news: {
    eyebrow: 'Co nowego?',
    heading: 'Ostatnie aktualności',
    linkAll: 'Wszystkie',
    readMore: 'Czytaj więcej',
  },

  values: {
    eyebrow: 'Nasze wartości',
    heading: 'Dlaczego warto być z nami?',
    items: [
      {
        title: 'Nowoczesne nauczanie',
        desc: 'Łączymy tradycję z nowoczesnością — metody dopasowane do potrzeb każdego ucznia.',
      },
      {
        title: 'Bezpieczne środowisko',
        desc: 'Tworzymy przyjazną i bezpieczną przestrzeń, w której każde dziecko może się rozwijać.',
      },
      {
        title: 'Wszechstronny rozwój',
        desc: 'Sport, kultura, nauka — wspieramy pasje uczniów na każdym polu aktywności.',
      },
    ],
  },

  cta: {
    heading: 'Masz pytania?',
    body: 'Zapraszamy do kontaktu.',
    button: 'Napisz do nas',
  },
};

// ─── Strona: Aktualności ─────────────────────────────────────────────────────

export const NEWS_PAGE = {
  meta: {
    title: 'Aktualności',
    description: 'Lista aktualności i ogłoszeń szkolnych.',
  },
  eyebrow: 'Co nowego?',
  heading: 'Aktualności',
};

// ─── Strona: O szkole ────────────────────────────────────────────────────────

export const ABOUT_PAGE = {
  meta: {
    title: 'O szkole',
    description:
      'Poznaj Szkołę Podstawową w Laskowie — naszą historię, misję i kadrę pedagogiczną.',
  },
  intro:
    'Szkoła Podstawowa w Laskowie to publiczna szkoła podstawowa kształcąca uczniów klas I–VIII oraz prowadząca oddział przedszkolny. Nasza placówka działa z myślą o wszechstronnym rozwoju każdego dziecka — zarówno intelektualnym, jak i społecznym oraz fizycznym.',
  organizer: 'Stowarzyszenie Na Rzecz Rozwoju Wsi Laskowo',
  mission: {
    heading: 'Nasza misja',
    body: 'Stwarzamy bezpieczne i przyjazne środowisko nauki, w którym każdy uczeń może rozwijać swoje talenty, budować pewność siebie i przygotowywać się do życia we współczesnym świecie.',
  },
  staff: {
    heading: 'Dyrekcja i grono pedagogiczne',
    directorName: 'Violetta Próchniak',
    body: 'Nasz zespół nauczycielski to doświadczeni i zaangażowani pedagodzy, stale podnoszący swoje kwalifikacje.',
  },
  contact: {
    heading: 'Dane kontaktowe',
  },
};
