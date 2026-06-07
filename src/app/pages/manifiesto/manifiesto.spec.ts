import { TestBed } from '@angular/core/testing';
import { Manifiesto } from './manifiesto';
import { TextToSpeechService } from '../../core/services/text-to-speech.service';
import { signal } from '@angular/core';
import { vi } from 'vitest';

describe('Manifiesto', () => {
  let mockTtsService: any;

  beforeEach(async () => {
    mockTtsService = {
      isPlaying: signal(false),
      isPaused: signal(false),
      currentText: signal(''),
      speak: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      stop: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [Manifiesto],
      providers: [
        { provide: TextToSpeechService, useValue: mockTtsService }
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(Manifiesto);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should have initial active section as 1', () => {
    const fixture = TestBed.createComponent(Manifiesto);
    const component = fixture.componentInstance;
    // activeSectionId is private/protected, but activeSection is public/protected.
    // Let's test the activeSection output or call the state changing method.
    expect(component['activeSectionId']()).toBe('1');
    expect(component['activeSection']().title).toBe('¿Por qué hacer política?');
  });

  it('should change the active section', () => {
    const fixture = TestBed.createComponent(Manifiesto);
    const component = fixture.componentInstance;
    component['setActiveSection']('2');
    expect(component['activeSectionId']()).toBe('2');
    expect(component['activeSection']().title).toBe('Para las Mujeres');
  });
});
