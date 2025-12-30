// JSMidiCircle - Entry Point
// WebMIDI Circle of Fifths visualizer with chord detection

import { initDom } from './dom.js';
import { initLayout, initAccidentals } from './layout.js';
import { initMidi } from './midiHandler.js';

// Initialize DOM elements
initDom();

// Initialize layout (Circle of Fifths toggle)
initLayout();

// Initialize accidentals toggle (sharp/flat preference)
initAccidentals();

// Initialize MIDI
initMidi();
