/** API */
export const API = "/api";

export const API_PATH = {
  RESOURCES: `${API}/resources`,
  RESOURCES_BY_ID: `${API}/resources-by-id`,
  SEARCH: `${API}/search`,
};

export const SECTION_QUERY = 'section=';

export const SECTIONS ={
  CHARACTERS: `${SECTION_QUERY}characters`,
  COMICS: `${SECTION_QUERY}comics`,
  EVENTS: `${SECTION_QUERY}events`,
  SERIES: `${SECTION_QUERY}series`,
};

export const OFFSET_NUMBER = `&offset=${Math.floor(Math.random() * 10) + 1}`;

/** Redirection */
export const ROUTES = {
  CHARACTERS: "/characters",
  EVENTS: "/events",
  SERIES: "/series",
  COMICS: "/comics",
};

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/inzumer",
  LINKEDIN: "https://www.linkedin.com/in/inzumer",
  PORTFOLIO: "https://bento.me/inzumer",
};

/** Resources */
export const FOOTER = [
  { url: SOCIAL_LINKS.GITHUB, name: 'Github' },
  { url: SOCIAL_LINKS.LINKEDIN, name: 'LinkedIn' },
  { url: SOCIAL_LINKS.PORTFOLIO, name: 'Portfolio' },
];

export const HEADER = [
  {
    url: ROUTES.CHARACTERS,
    text: 'CHARACTERS',
  },
  {
    url: ROUTES.EVENTS,
    text: 'EVENTS',
  },
  {
    url: ROUTES.SERIES,
    text: 'SERIES',
  },
  {
    url: ROUTES.COMICS,
    text: 'COMICS',
  }
];
