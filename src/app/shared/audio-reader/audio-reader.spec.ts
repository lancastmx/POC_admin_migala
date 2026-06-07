import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioReader } from './audio-reader';
import { TextToSpeechService } from '../../core/services/text-to-speech.service';
import { signal } from '@angular/core';
import { vi } from 'vitest';

describe('AudioReader Component', () => {
  let component: AudioReader;
  let fixture: ComponentFixture<AudioReader>;
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
      imports: [AudioReader],
      providers: [
        { provide: TextToSpeechService, useValue: mockTtsService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioReader);
    component = fixture.componentInstance;
    
    // Set required input using the componentRef setInput method
    fixture.componentRef.setInput('textToRead', 'Texto de prueba');
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call ttsService.speak when play is called', () => {
    component['play']();
    expect(mockTtsService.speak).toHaveBeenCalledWith('Texto de prueba');
  });

  it('should call ttsService.pause when pause is called', () => {
    component['pause']();
    expect(mockTtsService.pause).toHaveBeenCalled();
  });

  it('should call ttsService.resume when resume is called', () => {
    component['resume']();
    expect(mockTtsService.resume).toHaveBeenCalled();
  });

  it('should call ttsService.stop when stop is called', () => {
    component['stop']();
    expect(mockTtsService.stop).toHaveBeenCalled();
  });

  it('should call ttsService.stop on destroy', () => {
    component.ngOnDestroy();
    expect(mockTtsService.stop).toHaveBeenCalled();
  });
});
