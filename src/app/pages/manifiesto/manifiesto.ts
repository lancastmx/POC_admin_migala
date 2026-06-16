/** 
 * ─── Zettelkasten ───────────────────────────────────────────────── 
 * zk_id:  page-002
 * title:  MANIFIESTO — Manifiesto de Proyecto Migala
 * type:   page
 * tags:   [angular, page, manifesto, mission, values, tts]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ─────────────────────────────────────────────────────────────────── 
 */
import { Component, signal, computed, inject } from '@angular/core';
import { PageBanner } from '../../shared/page-banner/page-banner';
import { AudioReader } from '../../shared/audio-reader/audio-reader';
import { TextToSpeechService } from '../../core/services/text-to-speech.service';
import { SeoService } from '../../core/services/seo.service';
import { SEO_DATA } from '../../core/data/seo.data';
import { MANIFIESTO_SECTIONS, Section } from '../../core/data/manifiesto.data';

@Component({
  selector: 'migala-manifiesto',
  imports: [PageBanner, AudioReader],
  templateUrl: './manifiesto.html'
})
export class Manifiesto {
  private readonly ttsService = inject(TextToSpeechService);

  constructor() {
    const seo = SEO_DATA['manifiesto'];
    inject(SeoService).generateTags({
      title: seo.title,
      description: seo.description,
      url: seo.url
    });
  }

  // Signal to manage the active section ID
  protected readonly activeSectionId = signal<string>('1');

  // List of all sections in the Manifesto (both complete and draft placeholders)
  protected readonly sections: Section[] = MANIFIESTO_SECTIONS;
  protected readonly totalSections = computed(() => this.sections.length);

  // Computed signal to get the currently active section object
  protected readonly activeSection = computed(() => {
    const id = this.activeSectionId();
    return this.sections.find(s => s.id === id) || this.sections[0];
  });

  // Computed signal to expose the text or paragraphs to be read aloud
  protected readonly textToRead = computed<string | string[]>(() => {
    const sec = this.activeSection();
    if (sec.isDraft) {
      return sec.summary || '';
    }
    return sec.paragraphs || [];
  });

  // Action method to switch the active section
  protected setActiveSection(id: string): void {
    // Stop ongoing voice synthesis when changing sections
    this.ttsService.stop();
    this.activeSectionId.set(id);
    
    // Smooth scroll the content view on mobile
    if (typeof window !== 'undefined') {
      const contentEl = document.getElementById('manifesto-content');
      if (contentEl && typeof contentEl.scrollIntoView === 'function') {
        contentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
