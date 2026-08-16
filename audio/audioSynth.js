/**
 * stud.io Audio & Speech Synthesis Controller
 */
class StudioAudioSynth {
  constructor() {
    this.speechSynth = window.speechSynthesis;
    this.isPlaying = false;
    this.currentUtterance = null;
    this.playbackRate = 1.0;
  }

  speakText(text, onEnd, onBoundary) {
    this.stop();
    if (!text || !this.speechSynth) return;

    this.currentUtterance = new SpeechSynthesisUtterance(text);
    this.currentUtterance.rate = this.playbackRate;
    this.currentUtterance.pitch = 1.0;

    const voices = this.speechSynth.getVoices();
    if (voices.length > 0) {
      this.currentUtterance.voice = voices.find(v => v.lang.includes("en")) || voices[0];
    }

    this.currentUtterance.onend = () => {
      this.isPlaying = false;
      if (onEnd) onEnd();
    };

    if (onBoundary) {
      this.currentUtterance.onboundary = onBoundary;
    }

    this.isPlaying = true;
    this.speechSynth.speak(this.currentUtterance);
  }

  setRate(rate) {
    this.playbackRate = rate;
    if (this.currentUtterance) {
      this.currentUtterance.rate = rate;
    }
  }

  pause() {
    if (this.speechSynth && this.isPlaying) {
      this.speechSynth.pause();
      this.isPlaying = false;
    }
  }

  resume() {
    if (this.speechSynth && !this.isPlaying) {
      this.speechSynth.resume();
      this.isPlaying = true;
    }
  }

  stop() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
      this.isPlaying = false;
    }
  }
}

window.studioAudioSynth = new StudioAudioSynth();
