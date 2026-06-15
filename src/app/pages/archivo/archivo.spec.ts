import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Archivo } from './archivo';

describe('Archivo Component', () => {
  let component: Archivo;
  let fixture: ComponentFixture<Archivo>;
  let queryParamsSubject: BehaviorSubject<any>;

  beforeEach(async () => {
    queryParamsSubject = new BehaviorSubject<any>({});

    await TestBed.configureTestingModule({
      imports: [Archivo],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: queryParamsSubject.asObservable()
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Archivo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe cargar los datos de los documentos', () => {
    expect(component['documentos']().length).toBeGreaterThan(0);
  });

  it('debe iniciar en la categoria inicio por defecto y no listar documentos', () => {
    expect(component['selectedCategory']()).toBe('inicio');
    expect(component['filteredDocumentos']().length).toBe(0);
  });

  it('debe cambiar automaticamente la categoria a todos cuando se ingresa una busqueda en inicio', () => {
    expect(component['selectedCategory']()).toBe('inicio');
    component['searchQuery'].set('Nacional');
    fixture.detectChanges();
    expect(component['selectedCategory']()).toBe('todos');
  });

  it('debe filtrar por categoria', () => {
    component['selectedCategory'].set('ruta-critica');
    const filtered = component['filteredDocumentos']();
    expect(filtered.every(d => d.categoria === 'ruta-critica')).toBe(true);
    expect(filtered.length).toBeGreaterThan(0);
  });

  it('debe filtrar por eje/ambito', () => {
    component['selectedCategory'].set('todos');
    component['selectedEje'].set('nacional');
    const filtered = component['filteredDocumentos']();
    expect(filtered.every(d => d.eje === 'nacional')).toBe(true);
    expect(filtered.length).toBeGreaterThan(0);
  });

  it('debe filtrar por termino de busqueda en nombre o descripcion', () => {
    component['selectedCategory'].set('todos');
    component['searchQuery'].set('inventario');
    const filtered = component['filteredDocumentos']();
    expect(filtered.length).toBeGreaterThan(0);
    expect(
      filtered.every(
        d =>
          d.nombre.toLowerCase().includes('inventario') ||
          d.descripcion.toLowerCase().includes('inventario')
      )
    ).toBe(true);
  });

  it('debe actualizar los filtros cuando cambien los queryParams de la ruta', () => {
    queryParamsSubject.next({ categoria: 'ruta-critica', buscar: 'Nacional' });
    fixture.detectChanges();
    expect(component['selectedCategory']()).toBe('ruta-critica');
    expect(component['searchQuery']()).toBe('Nacional');
  });

  it('debe limpiar todos los filtros', () => {
    component['selectedCategory'].set('ruta-critica');
    component['selectedEje'].set('nacional');
    component['selectedFormat'].set('pdf');
    component['searchQuery'].set('Nacional');

    component['clearFilters']();

    expect(component['selectedCategory']()).toBe('todos');
    expect(component['selectedEje']()).toBe('todos');
    expect(component['selectedFormat']()).toBe('todos');
    expect(component['searchQuery']()).toBe('');
  });

  it('debe cargar los portales de transparencia para los 5 ejes y mapear los estados', () => {
    expect(component['portalesOperativos'].length).toBe(10);
    expect(component['portalesTematicos'].length).toBe(6);
    expect(component['portalesTransversales'].length).toBe(6);
    expect(component['portalesTerritoriales'].length).toBe(5);
    expect(component['portalesEstatales']().length).toBe(32);
    
    // CDMX debe ser Básico
    const cdmx = component['portalesEstatales']().find(p => p.seccion === 'Ciudad de México');
    expect(cdmx?.nivel).toBe('Básico');
  });

  it('debe alternar el modo de vista de los portales', () => {
    expect(component['viewMode']()).toBe('portales');
    component['viewMode'].set('tabla');
    expect(component['viewMode']()).toBe('tabla');
  });

  it('debe alternar la expansion de los ejes en el acordeon', () => {
    expect(component['expandedEjes']()['operativo']).toBe(true);
    component['toggleEje']('operativo');
    expect(component['expandedEjes']()['operativo']).toBe(false);
  });

  it('debe filtrar y personalizar dinámicamente los documentos por estado', () => {
    component['selectEstado']('09');
    expect(component['selectedEstado']()).toBe('09');
    expect(component['selectedEje']()).toBe('estatal');
    expect(component['selectedCategory']()).toBe('todos');

    const filtered = component['filteredDocumentos']();
    expect(filtered.length).toBeGreaterThan(0);
    
    const hasCdmx = filtered.some(d => d.nombre.includes('Ciudad de México'));
    expect(hasCdmx).toBe(true);
  });

  it('debe filtrar y personalizar dinámicamente los documentos por subsección/comisión', () => {
    component['selectSubseccion']('FIN', 'operativo');
    expect(component['selectedSubseccion']()).toBe('FIN');
    expect(component['selectedEje']()).toBe('operativo');
    expect(component['selectedCategory']()).toBe('todos');

    const filtered = component['filteredDocumentos']();
    expect(filtered.length).toBeGreaterThan(0);

    const hasFinanciera = filtered.some(d => d.nombre.includes('Comisión de Financiera'));
    expect(hasFinanciera).toBe(true);
  });

  it('debe permitir seleccionar estado y comisión desde portales interactivos', () => {
    component['selectEstadoFromPortal']('14');
    expect(component['selectedEstado']()).toBe('14');
    expect(component['selectedEje']()).toBe('estatal');

    component['selectSubseccionFromPortal']('CYT', 'tematico');
    expect(component['selectedSubseccion']()).toBe('CYT');
    expect(component['selectedEje']()).toBe('tematico');
    expect(component['selectedEstado']()).toBe('todos');
  });

  it('debe filtrar y personalizar dinámicamente los documentos por vocería territorial', () => {
    component['selectSubseccion']('VC1', 'territorial');
    expect(component['selectedSubseccion']()).toBe('VC1');
    expect(component['selectedEje']()).toBe('territorial');
    expect(component['selectedCategory']()).toBe('todos');

    const filtered = component['filteredDocumentos']();
    expect(filtered.length).toBeGreaterThan(0);

    const hasVc1 = filtered.some(d => d.nombre.includes('Vocería 1° Circunscripción'));
    expect(hasVc1).toBe(true);
  });

  it('debe contener las redes sociales nacionales', () => {
    expect(component['socialNetworks']).toBeDefined();
    expect(component['socialNetworks'].length).toBe(6);
    expect(component['socialNetworks'][0].name).toBe('Telegram');
  });

  it('debe contener la ruta critica nacional estructurada', () => {
    expect(component['rutaCritica']).toBeDefined();
    expect(component['rutaCritica'].titulo).toBe('RUTA CRÍTICA');
    expect(component['rutaCritica'].objetivos.length).toBe(5);
  });
});

