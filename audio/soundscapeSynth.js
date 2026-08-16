/**
 * stud.io Web Audio API Ambient Soundscape Synthesizer
 */
class SoundscapeSynth {
  constructor() {
    this.ctx = null;
    this.currentMode = null;
    this.activeNodes = [];
    this.gainNode = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.value = 0.3;
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  playRain() {
    this.stop();
    this.initContext();
    this.currentMode = "rain";

    // Pink noise buffer for rain
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11;
      b6 = white * 0.115926;
    }

    const rainNode = this.ctx.createBufferSource();
    rainNode.buffer = buffer;
    rainNode.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 800;

    rainNode.connect(filter);
    filter.connect(this.gainNode);
    rainNode.start();

    this.activeNodes.push(rainNode);
  }

  playBinauralAlpha() {
    this.stop();
    this.initContext();
    this.currentMode = "binaural";

    // 200 Hz Base + 10 Hz Alpha wave offset (210 Hz)
    const oscLeft = this.ctx.createOscillator();
    const oscRight = this.ctx.createOscillator();

    oscLeft.type = "sine";
    oscLeft.frequency.value = 200;

    oscRight.type = "sine";
    oscRight.frequency.value = 210; // 10Hz Alpha beat for focus

    const merger = this.ctx.createChannelMerger(2);
    oscLeft.connect(merger, 0, 0);
    oscRight.connect(merger, 0, 1);

    merger.connect(this.gainNode);

    oscLeft.start();
    oscRight.start();

    this.activeNodes.push(oscLeft, oscRight);
  }

  playSpaceLoFi() {
    this.stop();
    this.initContext();
    this.currentMode = "lofi";

    const osc = this.ctx.createOscillator();
    osc.type = "triangle";
    osc.frequency.value = 110; // A2 note

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 400;

    osc.connect(filter);
    filter.connect(this.gainNode);
    osc.start();

    this.activeNodes.push(osc);
  }

  setVolume(val) {
    if (this.gainNode) {
      this.gainNode.gain.value = Math.max(0, Math.min(1, val));
    }
  }

  stop() {
    this.activeNodes.forEach(n => {
      try { n.stop(); } catch(e) {}
    });
    this.activeNodes = [];
    this.currentMode = null;
  }
}

window.soundscapeSynth = new SoundscapeSynth();
