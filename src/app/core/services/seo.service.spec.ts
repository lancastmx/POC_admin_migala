import { TestBed } from '@angular/core/testing';
import { SeoService } from './seo.service';
import { Title, Meta } from '@angular/platform-browser';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: Title;
  let metaService: Meta;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Title, Meta]
    });
    service = TestBed.inject(SeoService);
    titleService = TestBed.inject(Title);
    metaService = TestBed.inject(Meta);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update the page title and standard description', () => {
    const config = {
      title: 'Título de Prueba',
      description: 'Esta es una descripción de prueba.'
    };

    service.generateTags(config);

    expect(titleService.getTitle()).toBe(config.title);
    expect(metaService.getTag('name="description"')?.content).toBe(config.description);
  });

  it('should update OpenGraph metadata', () => {
    const config = {
      title: 'OG Título',
      description: 'OG Descripción',
      url: 'https://example.com/page',
      image: 'https://example.com/image.png'
    };

    service.generateTags(config);

    expect(metaService.getTag('property="og:title"')?.content).toBe(config.title);
    expect(metaService.getTag('property="og:description"')?.content).toBe(config.description);
    expect(metaService.getTag('property="og:url"')?.content).toBe(config.url);
    expect(metaService.getTag('property="og:image"')?.content).toBe(config.image);
    expect(metaService.getTag('property="og:type"')?.content).toBe('website');
  });

  it('should update Twitter Card metadata', () => {
    const config = {
      title: 'Twitter Título',
      description: 'Twitter Descripción',
      image: 'https://example.com/twitter-image.png'
    };

    service.generateTags(config);

    expect(metaService.getTag('name="twitter:title"')?.content).toBe(config.title);
    expect(metaService.getTag('name="twitter:description"')?.content).toBe(config.description);
    expect(metaService.getTag('name="twitter:image"')?.content).toBe(config.image);
    expect(metaService.getTag('name="twitter:card"')?.content).toBe('summary_large_image');
  });

  it('should fall back to Logo1.png if no image is provided', () => {
    const config = {
      title: 'Fallback Título',
      description: 'Fallback Descripción'
    };

    service.generateTags(config);

    expect(metaService.getTag('property="og:image"')?.content).toBe('https://poc-admin-migala.web.app/assets/img/Logo1.png');
    expect(metaService.getTag('name="twitter:image"')?.content).toBe('https://poc-admin-migala.web.app/assets/img/Logo1.png');
  });
});
