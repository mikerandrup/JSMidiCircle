// Audio synthesis using Web Audio API
// Plays sine wave tones for MIDI notes

let audioCtx = null;
let enabled = false;
const activeOscillators = new Map();  // midiNote -> { osc, gain }

// Convert MIDI note number to frequency (A4 = 69 = 440Hz)
function midiToFrequency(midiNote) {
    return 440 * Math.pow(2, (midiNote - 69) / 12);
}

// Initialize audio (called on user gesture)
function ensureAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

// Start playing a note
export function playNote(midiNote) {
    if (!enabled || !audioCtx) return;

    // Don't duplicate if already playing
    if (activeOscillators.has(midiNote)) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.value = midiToFrequency(midiNote);

    // Gentle attack to avoid clicks
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.02);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();

    activeOscillators.set(midiNote, { osc, gain });
}

// Stop playing a note
export function stopNote(midiNote) {
    if (!activeOscillators.has(midiNote)) return;

    const { osc, gain } = activeOscillators.get(midiNote);

    // Gentle release to avoid clicks
    gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.05);

    // Stop oscillator after release
    setTimeout(() => {
        osc.stop();
        osc.disconnect();
        gain.disconnect();
    }, 60);

    activeOscillators.delete(midiNote);
}

// Stop all notes (e.g., when disabling)
function stopAllNotes() {
    for (const midiNote of activeOscillators.keys()) {
        stopNote(midiNote);
    }
}

// Check if audio is enabled
export function isEnabled() {
    return enabled;
}

// Toggle audio on/off
export function setEnabled(value) {
    enabled = value;
    if (enabled) {
        ensureAudioContext();
    } else {
        stopAllNotes();
    }
}

// Initialize audio toggle button
export function initAudio() {
    const button = document.getElementById('soundToggle');
    if (button) {
        button.addEventListener('click', () => {
            setEnabled(!enabled);
            button.textContent = enabled ? '🔊 Sound' : '🔇 Sound';
        });
    }
}
