import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'migala-page-banner',
  imports: [],
  templateUrl: './page-banner.html'
})
export class PageBanner {
  // Signal inputs for title, description and variant theme
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly variant = input<'migala' | 'migala-sky'>('migala');

  // Computed classes for container, title and description paragraph
  protected readonly sectionClass = computed(() => {
    return `bg-${this.variant()} text-white pt-16 pb-24 text-center px-4 relative rounded-b-[50%] md:rounded-b-[100%] lg:rounded-b-[100%] scale-x-105 origin-top overflow-hidden`;
  });

  protected readonly titleClass = computed(() => {
    const spacingClass = this.variant() === 'migala' ? 'mb-6' : 'mb-3';
    return `text-3xl md:text-4xl font-bold tracking-tight ${spacingClass}`;
  });

  protected readonly paragraphClass = computed(() => {
    return this.variant() === 'migala'
      ? 'text-sm md:text-base leading-relaxed text-migala-light opacity-90 font-light'
      : 'text-sm md:text-base leading-relaxed opacity-95 font-medium tracking-wide';
  });
}

