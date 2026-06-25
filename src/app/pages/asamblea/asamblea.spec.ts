import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asamblea } from './asamblea';

describe('Asamblea', () => {
  let component: Asamblea;
  let fixture: ComponentFixture<Asamblea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Asamblea],
    }).compileComponents();

    fixture = TestBed.createComponent(Asamblea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
