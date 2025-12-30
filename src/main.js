// JSMidiCircle - Entry Point
// WebMIDI Circle of Fifths visualizer with chord detection

import { initDom } from './dom.js';
import { initLayout, switchText } from './layout.js';
import { initMidi } from './midiHandler.js';

// Initialize DOM elements
initDom();

// Initialize layout (Circle of Fifths toggle)
initLayout();

// Expose switchText globally for onclick handlers in HTML
window.switchText = switchText;

// Initialize MIDI
initMidi();
