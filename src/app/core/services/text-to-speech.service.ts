/**
 * ─── Zettelkasten ─────────────────────────────────────────────────
 * zk_id:  svc-002
 * title:  TEXT_TO_SPEECH_SERVICE — Síntesis de voz con Web Speech API
 * type:   service
 * tags:   [angular, service, tts, speech, accessibility, web-speech-api]
 * author: lancast
 * created: 2026-06-10
 * updated: 2026-06-15
 * ───────────────────────────────────────────────────────────────────
 */
import { Injectable, signal } from '@angular/core';

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

  // Signals for voices and rate selection
  public readonly voices = signal<SpeechSynthesisVoice[]>([]);
  public readonly selectedVoice = signal<SpeechSynthesisVoice | null>(null);
  public readonly rate = signal<number>(1);

  // References for chunking playback
  private chunks: string[] = [];
  private currentChunkIndex = 0;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    // If running in browser and speaking, clean up synthesis on page unload
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', () => this.stop());

      if (window.speechSynthesis) {
        this.loadVoices();
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices(): void {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const allVoices = window.speechSynthesis.getVoices();
    // Filter for Spanish voices (supporting both es-MX, es_MX, es-ES, es_ES, and es)
    const spanishVoices = allVoices.filter(voice => {
      const lang = voice.lang.toLowerCase();
      return lang.startsWith('es-') || lang.startsWith('es_') || lang === 'es';
    });

    this.voices.set(spanishVoices);

    // Auto-select the first Spanish voice if none is active
    if (!this.selectedVoice() && spanishVoices.length > 0) {
      this.selectedVoice.set(spanishVoices[0]);
    }
  }

  /**
   * Sets the voice for reading. Continues speech from current chunk if active.
   */
  public setVoice(voice: SpeechSynthesisVoice): void {
    this.selectedVoice.set(voice);
    if (this._isPlaying()) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      this.speakCurrentChunk();
    }
  }

  /**
   * Sets the reading rate/speed (0.5 to 3.0). Continues speech from current chunk.
   */
  public setRate(speed: number): void {
    const clampedSpeed = Math.max(0.5, Math.min(3, speed));
    this.rate.set(clampedSpeed);
    if (this._isPlaying()) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      this.speakCurrentChunk();
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

    this.chunks = this.splitIntoChunks(fullText);
    if (this.chunks.length === 0) {
      return;
    }

    this._currentText.set(fullText);
    this._isPlaying.set(true);
    this._isPaused.set(false);
    this.currentChunkIndex = 0;

    this.speakCurrentChunk();
  }

  /**
   * Pauses the active speech using cancel workaround for mobile stability.
   */
  public pause(): void {
    if (this._isPlaying() && !this._isPaused()) {
      this._isPaused.set(true);
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    }
  }

  /**
   * Resumes the paused speech by re-playing the current chunk.
   */
  public resume(): void {
    if (this._isPlaying() && this._isPaused()) {
      this._isPaused.set(false);
      this.speakCurrentChunk();
    }
  }

  /**
   * Cancels the active speech.
   */
  public stop(): void {
    this._isPlaying.set(false);
    this._isPaused.set(false);
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.clearState();
  }

  /**
   * Splitting helper to divide text into chunks under 200 characters to prevent timeouts on mobile.
   */
  private splitIntoChunks(text: string): string[] {
    // Split on sentence boundaries (. ! ? or newlines) keeping the punctuation
    const rawChunks = text.split(/(?<=[.!?\n])\s+/);
    const result: string[] = [];

    for (let chunk of rawChunks) {
      chunk = chunk.trim();
      if (!chunk) continue;

      // If a single sentence is very long, divide it by clauses (, ; or :) to keep chunks small
      if (chunk.length > 200) {
        const subChunks = chunk.split(/(?<=[,;:])\s+/);
        for (let sub of subChunks) {
          sub = sub.trim();
          if (sub) {
            result.push(sub);
          }
        }
      } else {
        result.push(chunk);
      }
    }
    return result;
  }

  /**
   * Helper that triggers speaking for the chunk at currentChunkIndex.
   */
  private speakCurrentChunk(): void {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (this.currentChunkIndex >= this.chunks.length) {
      this.clearState();
      return;
    }

    const chunkText = this.chunks[this.currentChunkIndex];
    try {
      const utterance = new SpeechSynthesisUtterance(chunkText);
      this.currentUtterance = utterance;

      // Apply selected voice or fall back to system default Spanish voice
      const activeVoice = this.selectedVoice();
      if (activeVoice) {
        utterance.voice = activeVoice;
        utterance.lang = activeVoice.lang;
      } else {
        const voices = window.speechSynthesis.getVoices();
        const spanishVoice = voices.find(voice => {
          const lang = voice.lang.toLowerCase();
          return lang.startsWith('es-') || lang.startsWith('es_') || lang === 'es';
        });
        if (spanishVoice) {
          utterance.voice = spanishVoice;
          utterance.lang = spanishVoice.lang;
        } else {
          utterance.lang = 'es-MX';
        }
      }

      // Apply speed rate
      utterance.rate = this.rate();

      // Event handlers with local utterance reference check to prevent race conditions
      utterance.onend = () => {
        if (this.currentUtterance === utterance) {
          if (this._isPlaying() && !this._isPaused()) {
            this.currentChunkIndex++;
            this.speakCurrentChunk();
          }
        }
      };

      utterance.onerror = (event) => {
        if (this.currentUtterance === utterance) {
          // If a cloud voice fails due to unavailability, clear selection to fallback
          if (event.error === 'voice-unavailable' || event.error === 'language-unavailable') {
            console.warn('Voice failed on mobile. Falling back to default system voice.');
            this.selectedVoice.set(null);
          }
          
          if (event.error !== 'interrupted' && this._isPlaying() && !this._isPaused()) {
            console.error('TTS Chunk Error:', event);
            this.currentChunkIndex++;
            this.speakCurrentChunk();
          } else if (event.error !== 'interrupted') {
            this.clearState();
          }
        }
      };

      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Error starting speech synthesis on chunk:', e);
      this.clearState();
    }
  }

  private clearState(): void {
    this._isPlaying.set(false);
    this._isPaused.set(false);
    this._currentText.set('');
    this.currentUtterance = null;
    this.chunks = [];
    this.currentChunkIndex = 0;
  }
}
