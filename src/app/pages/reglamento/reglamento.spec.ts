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
});
