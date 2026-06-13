import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Estructura } from './estructura';

describe('Estructura Component', () => {
  let component: Estructura;
  let fixture: ComponentFixture<Estructura>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estructura],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Estructura);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar los datos iniciales de organizaciones y procedimientos', () => {
    expect(component['organizaciones']().length).toBeGreaterThan(0);
    expect(component['procedimientos']().length).toBeGreaterThan(0);
  });

  it('debe cambiar de tab y limpiar filtros', () => {
    component['activeTab'].set('procedimientos');
    expect(component['activeTab']()).toBe('procedimientos');
  });

  it('debe encontrar el organo seleccionado', () => {
    component['selectedOrganId'].set('org-confu');
    expect(component['selectedOrgan']()?.siglas).toBe('CONFU');
  });

  it('debe encontrar el padre y subgrupos del organo seleccionado', () => {
    component['selectedOrganId'].set('org-confu');
    expect(component['selectedOrganParent']()?.id).toBe('org-coordinacion-nacional');
  });

  it('debe parsear correctamente la estructura XML semantica en segmentos', () => {
    const text = 'Reunir a los <rol id="afiliado">Afiliados</rol> con la aprobación de <organo id="org-confu">CONFU</organo>.';
    const segments = component['parseXmlDescription'](text);
    
    expect(segments.length).toBe(5);
    
    expect(segments[0]).toEqual({ type: 'text', content: 'Reunir a los ' });
    expect(segments[1]).toEqual({ type: 'rol', content: 'Afiliados', id: 'afiliado', tipo: undefined, valor: undefined });
    expect(segments[2]).toEqual({ type: 'text', content: ' con la aprobación de ' });
    expect(segments[3]).toEqual({ type: 'organo', content: 'CONFU', id: 'org-confu', tipo: undefined, valor: undefined });
    expect(segments[4]).toEqual({ type: 'text', content: '.' });
  });

  it('debe retornar texto plano si no hay etiquetas XML', () => {
    const text = 'Texto normal sin etiquetas.';
    const segments = component['parseXmlDescription'](text);
    expect(segments.length).toBe(1);
    expect(segments[0]).toEqual({ type: 'text', content: text });
  });
});
