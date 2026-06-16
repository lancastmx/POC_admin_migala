import { describe, it, expect } from 'vitest';
import { getFaviconUrl, PLATAFORMAS } from './platforms.data';
import { SOCIAL_NETWORKS } from './social-networks.data';

describe('PLATAFORMAS catalog', () => {
  it('should have all 6 platforms defined', () => {
    expect(Object.keys(PLATAFORMAS).length).toBe(6);
    expect(PLATAFORMAS).toHaveProperty('telegram');
    expect(PLATAFORMAS).toHaveProperty('youtube');
    expect(PLATAFORMAS).toHaveProperty('instagram');
    expect(PLATAFORMAS).toHaveProperty('tiktok');
    expect(PLATAFORMAS).toHaveProperty('twitter');
    expect(PLATAFORMAS).toHaveProperty('facebook');
  });

  it('each platform should have nombre, icono, svg, domain', () => {
    for (const [key, p] of Object.entries(PLATAFORMAS)) {
      expect(p.nombre).toBeTruthy();
      expect(p.icono).toBeTruthy();
      expect(p.svg).toMatch(/^assets\/icons\/.+\.svg$/);
      expect(p.domain).toBeTruthy();
    }
  });
});

describe('getFaviconUrl', () => {
  it('should generate the correct google favicon URL', () => {
    const domain = 'example.com';
    const expectedUrl = 'https://www.google.com/s2/favicons?domain=example.com&sz=64';
    expect(getFaviconUrl(domain)).toBe(expectedUrl);
  });

  it('should generate favicon URL with custom size', () => {
    const domain = 'example.com';
    const expectedUrl = 'https://www.google.com/s2/favicons?domain=example.com&sz=128';
    expect(getFaviconUrl(domain, 128)).toBe(expectedUrl);
  });
});

describe('SOCIAL_NETWORKS (resolved from catalog)', () => {
  it('should have all 6 default social networks configured', () => {
    expect(SOCIAL_NETWORKS.length).toBe(6);
  });

  it('should have correct details for each social network', () => {
    const expectedNetworks = [
      { name: 'Telegram', domain: 't.me', svg: 'telegram.svg', url: 'https://t.me/+GPjXgBGPaolhNjhh' },
      { name: 'YouTube', domain: 'youtube.com', svg: 'youtube.svg', url: 'https://www.youtube.com/@ProyectoMigalaNacional' },
      { name: 'Instagram', domain: 'instagram.com', svg: 'instagram.svg', url: 'https://www.instagram.com/proyectomigalanacional' },
      { name: 'TikTok', domain: 'tiktok.com', svg: 'tiktok.svg', url: 'https://www.tiktok.com/@proyectomigala' },
      { name: 'X', domain: 'x.com', svg: 'x.svg', url: 'https://x.com/proyectomigala_' },
      { name: 'Facebook', domain: 'facebook.com', svg: 'facebook.svg', url: 'https://www.facebook.com/groups/proyectomigala/permalink/552116866977281' },
    ];

    for (const expected of expectedNetworks) {
      const net = SOCIAL_NETWORKS.find(s => s.name === expected.name);
      expect(net).toBeDefined();
      expect(net?.domain).toBe(expected.domain);
      expect(net?.url).toBe(expected.url);
      expect(net?.iconUrl).toContain(expected.svg);
    }
  });
});
