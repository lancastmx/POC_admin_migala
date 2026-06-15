import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Propuesta } from './propuesta';
import { SeoService } from '../../core/services/seo.service';
import { vi } from 'vitest';

describe('Propuesta Component', () => {
  let component: Propuesta;
  let fixture: ComponentFixture<Propuesta>;
  let mockSeoService: any;

  beforeEach(async () => {
    mockSeoService = {
      generateTags: vi.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [Propuesta],
      providers: [
        { provide: SeoService, useValue: mockSeoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Propuesta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should generate SEO tags on creation', () => {
    expect(mockSeoService.generateTags).toHaveBeenCalled();
  });

  it('should load all 10 proposal items', () => {
    expect(component['items'].length).toBe(10);
    expect(component['items'][0].id).toBe('01');
    expect(component['items'][9].id).toBe('10');
  });

  it('should start with tab 01 as active', () => {
    expect(component['activeTabId']()).toBe('01');
    expect(component['activeItem']().id).toBe('01');
    expect(component['activeItem']().seccion).toBe('Nombre');
  });

  it('should change active tab when selectTab is called', () => {
    component['selectTab']('03');
    expect(component['activeTabId']()).toBe('03');
    expect(component['activeItem']().id).toBe('03');
    expect(component['activeItem']().seccion).toBe('Descripción');
  });

  it('should correctly identify link values', () => {
    expect(component['isLink']('https://github.com/lancastmx')).toBe(true);
    expect(component['isLink']('t.me/Lancast5')).toBe(true);
    expect(component['isLink']('regular-text')).toBe(false);
  });

  it('should format link urls properly', () => {
    expect(component['getLinkUrl']('https://github.com/lancastmx')).toBe('https://github.com/lancastmx');
    expect(component['getLinkUrl']('t.me/Lancast5')).toBe('https://t.me/Lancast5');
  });
});
