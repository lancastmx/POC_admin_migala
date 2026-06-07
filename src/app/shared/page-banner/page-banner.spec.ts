import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageBanner } from './page-banner';

describe('PageBanner', () => {
  let component: PageBanner;
  let fixture: ComponentFixture<PageBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBanner]
    }).compileComponents();

    fixture = TestBed.createComponent(PageBanner);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('title', 'Test Title');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render title and description', () => {
    fixture.componentRef.setInput('title', 'Transparencia');
    fixture.componentRef.setInput('description', 'Consulta de forma abierta nuestro reglamento');
    fixture.componentRef.setInput('variant', 'migala-sky');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Transparencia');
    expect(compiled.querySelector('p')?.textContent).toContain('Consulta de forma abierta nuestro reglamento');
  });

  it('should apply appropriate classes based on variant', () => {
    fixture.componentRef.setInput('title', 'Home');
    fixture.componentRef.setInput('variant', 'migala');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const section = compiled.querySelector('section');
    expect(section?.className).toContain('bg-migala');
    expect(section?.className).not.toContain('bg-migala-sky');
  });
});
