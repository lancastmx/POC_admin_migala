import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Reglamento } from './reglamento';

describe('Reglamento', () => {
  let component: Reglamento;
  let fixture: ComponentFixture<Reglamento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reglamento],
    }).compileComponents();

    fixture = TestBed.createComponent(Reglamento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have data loaded', () => {
    expect(component.reglamento().title).toContain('MIGALA');
    expect(component.reglamento().titulos.length).toBeGreaterThan(0);
    expect(component.metrics()!.totalTitulos).toBe(8);
  });

  it('should have enriched model fields', () => {
    const firstArt = component.allArticles()[0];
    expect(firstArt.type).toBeDefined();
    expect(firstArt.cluster).toBeDefined();
    expect(firstArt.tags.length).toBeGreaterThan(0);
    expect(firstArt.fragments.length).toBeGreaterThan(0);
    expect(firstArt.wordCount).toBeGreaterThan(0);
  });

  it('should filter by search query', () => {
    component.searchQuery.set('paridad');
    const filtered = component.filteredArticles();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every(a =>
      a.content.toLowerCase().includes('paridad') ||
      a.tags.some(t => t.includes('paridad'))
    )).toBe(true);
  });

  it('should filter by type', () => {
    component.typeFilter.set('principio');
    const filtered = component.filteredArticles();
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every(a => a.type === 'principio')).toBe(true);
  });

  it('should switch tabs', () => {
    component.setTab('operativo');
    expect(component.activeTab()).toBe('operativo');
    const filtered = component.filteredArticles();
    expect(filtered.every(a => a.cluster === 'operativo')).toBe(true);
  });

  it('should compute available types', () => {
    const types = component.availableTypes();
    expect(types.length).toBeGreaterThan(0);
    expect(types.some(t => t.count > 0)).toBe(true);
  });

  it('should group articles', () => {
    const all = component.filteredArticles();
    const groups = component.groupArticles(all);
    expect(groups.length).toBeGreaterThan(0);
    expect(groups[0].articulos.length).toBeGreaterThan(0);
  });

  it('should have TOC structure', () => {
    const toc = component.toc();
    expect(toc.length).toBeGreaterThan(0);
    expect(toc[0].capitulos.length).toBeGreaterThan(0);
  });
});
