import { getFaviconUrl, SOCIAL_NETWORKS } from './social-networks';

describe('SocialNetworks Core Utility', () => {
  it('should generate the correct google favicon URL', () => {
    const domain = 'example.com';
    const expectedUrl = 'https://www.google.com/s2/favicons?domain=example.com&sz=64';
    expect(getFaviconUrl(domain)).toBe(expectedUrl);
  });

  it('should generate favicon URL with custom size', () => {
    const domain = 'example.com';
    const size = 128;
    const expectedUrl = 'https://www.google.com/s2/favicons?domain=example.com&sz=128';
    expect(getFaviconUrl(domain, size)).toBe(expectedUrl);
  });

  it('should have all 6 default social networks configured', () => {
    expect(SOCIAL_NETWORKS.length).toBe(6);
  });

  it('should have correct details for each configured social network', () => {
    const expectedNetworks = [
      { name: 'Telegram', domain: 't.me', url: 'https://t.me/+GPjXgBGPaolhNjhh' },
      { name: 'Youtube', domain: 'youtube.com', url: 'https://www.youtube.com/@ProyectoMigalaNacional' },
      { name: 'Instagram', domain: 'instagram.com', url: 'https://www.instagram.com/proyectomigalanacional' },
      { name: 'Tiktok', domain: 'tiktok.com', url: 'https://www.tiktok.com/@proyectomigala' },
      { name: 'X', domain: 'x.com', url: 'https://x.com/proyectomigala_' },
      { name: 'Facebook', domain: 'facebook.com', url: 'https://www.facebook.com/groups/proyectomigala/permalink/552116866977281' }
    ];

    for (const expected of expectedNetworks) {
      const net = SOCIAL_NETWORKS.find(s => s.name === expected.name);
      expect(net).toBeDefined();
      expect(net?.domain).toBe(expected.domain);
      expect(net?.url).toBe(expected.url);
      expect(net?.iconUrl).toContain(expected.domain);
    }
  });
});
