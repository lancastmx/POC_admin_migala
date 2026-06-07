import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  /**
   * Dynamically generates/updates meta tags for SEO/AEO optimization and social sharing.
   * @param config Configuration parameters containing title, description, image, and page URL.
   */
  public generateTags(config: SeoConfig): void {
    // 1. Update document title
    this.titleService.setTitle(config.title);

    // 2. Update standard description meta tag
    this.metaService.updateTag({ name: 'description', content: config.description });

    // 3. Update OpenGraph tags (for crawlers and AI search engine enrichment)
    this.metaService.updateTag({ property: 'og:title', content: config.title });
    this.metaService.updateTag({ property: 'og:description', content: config.description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });
    
    if (config.image) {
      this.metaService.updateTag({ property: 'og:image', content: config.image });
    } else {
      // Default placeholder fallback
      this.metaService.updateTag({ property: 'og:image', content: 'https://poc-admin-migala.web.app/assets/img/Logo1.png' });
    }

    if (config.url) {
      this.metaService.updateTag({ property: 'og:url', content: config.url });
    }

    // 4. Update Twitter Card tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: config.title });
    this.metaService.updateTag({ name: 'twitter:description', content: config.description });
    
    if (config.image) {
      this.metaService.updateTag({ name: 'twitter:image', content: config.image });
    } else {
      this.metaService.updateTag({ name: 'twitter:image', content: 'https://poc-admin-migala.web.app/assets/img/Logo1.png' });
    }
  }
}
