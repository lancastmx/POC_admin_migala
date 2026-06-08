import { Component, input, inject, OnDestroy } from '@angular/core';
import { TextToSpeechService } from '../../core/services/text-to-speech.service';

@Component({
  selector: 'migala-audio-reader',
  templateUrl: './audio-reader.html',
  standalone: true
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
