import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transparencia } from './transparencia';
import { provideRouter } from '@angular/router';

describe('Transparencia', () => {
  let component: Transparencia;
  let fixture: ComponentFixture<Transparencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transparencia],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Transparencia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have all 13 transparency sections', () => {
    expect(component['sections'].length).toBe(13);
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
