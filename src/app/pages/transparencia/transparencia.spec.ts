import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transparencia } from './transparencia';
import { provideRouter } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { vi } from 'vitest';

describe('Transparencia', () => {
  let component: Transparencia;
  let fixture: ComponentFixture<Transparencia>;
  let mockSeoService: any;

  beforeEach(async () => {
    mockSeoService = {
      generateTags: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [Transparencia],
      providers: [
        provideRouter([]),
        { provide: SeoService, useValue: mockSeoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Transparencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all 14 transparency sections', () => {
    expect(component['sections'].length).toBe(14);
  });

  it('should have no open section initially', () => {
    expect(component['openSectionId']()).toBeNull();
  });

  it('should toggle section when requested', () => {
    component['toggleSection']('manifiesto');
    expect(component['openSectionId']()).toBe('manifiesto');

    component['toggleSection']('manifiesto');
    expect(component['openSectionId']()).toBeNull();
  });
});
