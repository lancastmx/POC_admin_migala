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
    const telegram = SOCIAL_NETWORKS.find(s => s.name === 'Telegram');
    expect(telegram).toBeDefined();
    expect(telegram?.domain).toBe('t.me');
    expect(telegram?.url).toBe('https://t.me/+GPjXgBGPaolhNjhh');
    expect(telegram?.iconUrl).toContain('t.me');

    const youtube = SOCIAL_NETWORKS.find(s => s.name === 'Youtube');
    expect(youtube).toBeDefined();
    expect(youtube?.domain).toBe('youtube.com');
    expect(youtube?.url).toBe('https://www.youtube.com/@ProyectoMigalaNacional');
    expect(youtube?.iconUrl).toContain('youtube.com');

    const instagram = SOCIAL_NETWORKS.find(s => s.name === 'Instagram');
    expect(instagram).toBeDefined();
    expect(instagram?.domain).toBe('instagram.com');
    expect(instagram?.url).toBe('https://www.instagram.com/proyectomigalanacional');
    expect(instagram?.iconUrl).toContain('instagram.com');

    const tiktok = SOCIAL_NETWORKS.find(s => s.name === 'Tiktok');
    expect(tiktok).toBeDefined();
    expect(tiktok?.domain).toBe('tiktok.com');
    expect(tiktok?.url).toBe('https://www.tiktok.com/@proyectomigala');
    expect(tiktok?.iconUrl).toContain('tiktok.com');

    const x = SOCIAL_NETWORKS.find(s => s.name === 'X');
    expect(x).toBeDefined();
    expect(x?.domain).toBe('x.com');
    expect(x?.url).toBe('https://x.com/proyectomigala_');
    expect(x?.iconUrl).toContain('x.com');

    const facebook = SOCIAL_NETWORKS.find(s => s.name === 'Facebook');
    expect(facebook).toBeDefined();
    expect(facebook?.domain).toBe('facebook.com');
    expect(facebook?.url).toBe('https://www.facebook.com/groups/proyectomigala/permalink/552116866977281');
    expect(facebook?.iconUrl).toContain('facebook.com');
  });
});
