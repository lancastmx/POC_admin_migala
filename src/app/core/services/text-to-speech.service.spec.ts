import { TestBed } from '@angular/core/testing';
import { TextToSpeechService } from './text-to-speech.service';
import { vi } from 'vitest';

describe('TextToSpeechService', () => {
  let service: TextToSpeechService;
  let mockSpeechSynthesis: any;

  beforeEach(() => {
    // Mock SpeechSynthesis
    mockSpeechSynthesis = {
      speak: vi.fn(),
      pause: vi.fn(),
      resume: vi.fn(),
      cancel: vi.fn(),
      getVoices: vi.fn().mockReturnValue([
        { lang: 'es-MX', name: 'Mexican Spanish' },
        { lang: 'en-US', name: 'US English' }
      ])
    };

    // Safely assign mocked speechSynthesis to global window mock
    if (typeof window !== 'undefined') {
      vi.stubGlobal('speechSynthesis', mockSpeechSynthesis);
      vi.stubGlobal('SpeechSynthesisUtterance', class {
        text: string;
        lang: string = '';
        voice: any = null;
        onend: (() => void) | null = null;
        onerror: (() => void) | null = null;
        constructor(text: string) {
          this.text = text;
        }
      });
    }

    TestBed.configureTestingModule({});
    service = TestBed.inject(TextToSpeechService);
  });

  afterEach(() => {
    service.stop();
    vi.unstubAllGlobals();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with playing and paused states as false', () => {
    expect(service.isPlaying()).toBe(false);
    expect(service.isPaused()).toBe(false);
  });

  it('should call speak and update playing states', () => {
    service.speak('Hola Mundo');
    expect(mockSpeechSynthesis.speak).toHaveBeenCalled();
    expect(service.isPlaying()).toBe(true);
    expect(service.currentText()).toBe('Hola Mundo');
  });

  it('should handle array of text inputs by joining them', () => {
    service.speak(['Párrafo 1', 'Párrafo 2']);
    expect(service.currentText()).toBe('Párrafo 1\n\nPárrafo 2');
  });

  it('should pause speech and update paused state', () => {
    service.speak('Hola Mundo');
    
    // Clear mock call count
    mockSpeechSynthesis.cancel.mockClear();
    
    service.pause();
    expect(mockSpeechSynthesis.cancel).toHaveBeenCalled();
    expect(service.isPaused()).toBe(true);
  });

  it('should resume speech and update paused state', () => {
    service.speak('Hola Mundo');
    service.pause();
    
    // Clear mock speak count
    mockSpeechSynthesis.speak.mockClear();
    
    service.resume();
    expect(mockSpeechSynthesis.speak).toHaveBeenCalled();
    expect(service.isPaused()).toBe(false);
  });

  it('should cancel speech and clear state when stop is called', () => {
    service.speak('Hola Mundo');
    service.stop();
    expect(mockSpeechSynthesis.cancel).toHaveBeenCalled();
    expect(service.isPlaying()).toBe(false);
    expect(service.currentText()).toBe('');
  });

  it('should filter Spanish voices and auto-select the first one', () => {
    const voices = service.voices();
    expect(voices.length).toBe(1);
    expect(voices[0].lang).toBe('es-MX');
    expect(service.selectedVoice()).toEqual({ lang: 'es-MX', name: 'Mexican Spanish' });
  });

  it('should allow setting a new voice and restart speech if active', () => {
    const spanishVoice = { lang: 'es-ES', name: 'Spain Spanish' } as any;
    service.speak('Hola');
    
    // Reset mock counts to track new calls
    mockSpeechSynthesis.speak.mockClear();
    mockSpeechSynthesis.cancel.mockClear();
    
    service.setVoice(spanishVoice);
    expect(service.selectedVoice()).toBe(spanishVoice);
    expect(mockSpeechSynthesis.cancel).toHaveBeenCalled();
    expect(mockSpeechSynthesis.speak).toHaveBeenCalled();
  });

  it('should allow setting a rate and restart speech if active', () => {
    service.speak('Hola');
    
    // Reset mock counts
    mockSpeechSynthesis.speak.mockClear();
    mockSpeechSynthesis.cancel.mockClear();
    
    service.setRate(1.75);
    expect(service.rate()).toBe(1.75);
    expect(mockSpeechSynthesis.cancel).toHaveBeenCalled();
    expect(mockSpeechSynthesis.speak).toHaveBeenCalled();
  });
});
