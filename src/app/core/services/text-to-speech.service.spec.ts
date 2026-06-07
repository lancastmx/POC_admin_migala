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
    service.pause();
    expect(mockSpeechSynthesis.pause).toHaveBeenCalled();
    expect(service.isPaused()).toBe(true);
  });

  it('should resume speech and update paused state', () => {
    service.speak('Hola Mundo');
    service.pause();
    service.resume();
    expect(mockSpeechSynthesis.resume).toHaveBeenCalled();
    expect(service.isPaused()).toBe(false);
  });

  it('should cancel speech and clear state when stop is called', () => {
    service.speak('Hola Mundo');
    service.stop();
    expect(mockSpeechSynthesis.cancel).toHaveBeenCalled();
    expect(service.isPlaying()).toBe(false);
    expect(service.currentText()).toBe('');
  });
});
