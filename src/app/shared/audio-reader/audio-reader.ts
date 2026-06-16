/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  ui-008
 * title:  AUDIO_READER — Reproductor de texto-a-voz para artículos
 * type:   component
 * tags:   [angular, component, audio, tts, accessibility]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Component, input, inject, OnDestroy } from '@angular/core';
import { TextToSpeechService } from '../../core/services/text-to-speech.service';

@Component({
  selector: 'migala-audio-reader',
  templateUrl: './audio-reader.html',
  standalone: true,
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `
})
export class AudioReader implements OnDestroy {
  private readonly ttsService = inject(TextToSpeechService);

  // Required text or paragraph list input to read aloud
  public readonly textToRead = input.required<string | string[]>();

  protected readonly isPlaying = this.ttsService.isPlaying;
  protected readonly isPaused = this.ttsService.isPaused;

  // Expose voice list, active voice, and active rate
  protected readonly voices = this.ttsService.voices;
  protected readonly selectedVoice = this.ttsService.selectedVoice;
  protected readonly rate = this.ttsService.rate;

  protected readonly speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

  protected play(): void {
    this.ttsService.speak(this.textToRead());
  }

  protected pause(): void {
    this.ttsService.pause();
  }

  protected resume(): void {
    this.ttsService.resume();
  }

  protected stop(): void {
    this.ttsService.stop();
  }

  protected changeVoice(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const name = select.value;
    const voice = this.voices().find(v => v.name === name);
    if (voice) {
      this.ttsService.setVoice(voice);
    }
  }

  protected changeRate(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const speed = parseFloat(select.value);
    this.ttsService.setRate(speed);
  }

  ngOnDestroy(): void {
    // Automatically stop speaking when navigating away from the page
    this.ttsService.stop();
  }
}
