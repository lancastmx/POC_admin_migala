import { Injectable, signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  // Reactive signals for the player state
  private readonly _isPlaying = signal<boolean>(false);
  private readonly _isPaused = signal<boolean>(false);
  private readonly _currentText = signal<string>('');

  public readonly isPlaying = this._isPlaying.asReadonly();
  public readonly isPaused = this._isPaused.asReadonly();
  public readonly currentText = this._currentText.asReadonly();

  // Reference to the current utterance
  private utterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    // If running in browser and speaking, clean up synthesis on page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => this.stop());
    }
  }

  /**
   * Starts speaking the given text or array of paragraphs.
   */
  public speak(text: string | string[]): void {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      console.warn('SpeechSynthesis is not supported on this environment.');
      return;
    }

    // Stop any ongoing speech
    this.stop();

    const fullText = Array.isArray(text) ? text.join('\n\n') : text;
    if (!fullText.trim()) {
      return;
    }

    this._currentText.set(fullText);
    this._isPlaying.set(true);
    this._isPaused.set(false);

    try {
      this.utterance = new SpeechSynthesisUtterance(fullText);

      // Try to find a Spanish voice
      const voices = window.speechSynthesis.getVoices();
      const spanishVoice = voices.find(voice => 
        voice.lang.startsWith('es-MX') || 
        voice.lang.startsWith('es-ES') || 
        voice.lang.startsWith('es')
      );
      if (spanishVoice) {
        this.utterance.voice = spanishVoice;
      }
      this.utterance.lang = spanishVoice ? spanishVoice.lang : 'es-MX';

      // Attach event listeners to clean up state
      this.utterance.onend = () => this.clearState();
      this.utterance.onerror = () => this.clearState();

      window.speechSynthesis.speak(this.utterance);
    } catch (e) {
      console.error('Error starting speech synthesis:', e);
      this.clearState();
    }
  }

  /**
   * Pauses the active speech.
   */
  public pause(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis && this._isPlaying() && !this._isPaused()) {
      window.speechSynthesis.pause();
      this._isPaused.set(true);
    }
  }

  /**
   * Resumes the paused speech.
   */
  public resume(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis && this._isPlaying() && this._isPaused()) {
      window.speechSynthesis.resume();
      this._isPaused.set(false);
    }
  }

  /**
   * Cancels the active speech.
   */
  public stop(): void {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.clearState();
  }

  private clearState(): void {
    this._isPlaying.set(false);
    this._isPaused.set(false);
    this._currentText.set('');
    this.utterance = null;
  }
}
