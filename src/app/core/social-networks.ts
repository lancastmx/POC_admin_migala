export interface SocialNetwork {
  name: string;
  url: string;
  domain: string;
  iconUrl: string;
}

/**
 * Generates the URL to fetch the favicon for a given domain using Google's S2 Favicon service.
 * @param domain The domain of the social network (e.g. 'youtube.com')
 * @param size The size of the favicon in pixels (default 64)
 */
export function getFaviconUrl(domain: string, size: number = 64): string {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
}

export const SOCIAL_NETWORKS: SocialNetwork[] = [
  {
    name: 'Telegram',
    url: 'https://t.me/+GPjXgBGPaolhNjhh',
    domain: 't.me',
    iconUrl: getFaviconUrl('t.me')
  },
  {
    name: 'Youtube',
    url: 'https://www.youtube.com/@ProyectoMigalaNacional',
    domain: 'youtube.com',
    iconUrl: getFaviconUrl('youtube.com')
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/proyectomigalanacional',
    domain: 'instagram.com',
    iconUrl: getFaviconUrl('instagram.com')
  },
  {
    name: 'Tiktok',
    url: 'https://www.tiktok.com/@proyectomigala',
    domain: 'tiktok.com',
    iconUrl: getFaviconUrl('tiktok.com')
  },
  {
    name: 'X',
    url: 'https://x.com/proyectomigala_',
    domain: 'x.com',
    iconUrl: getFaviconUrl('x.com')
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/groups/proyectomigala/permalink/552116866977281',
    domain: 'facebook.com',
    iconUrl: getFaviconUrl('facebook.com')
  }
];
