// MIDI handling using WebMidi
import WebMidi from 'webmidi';
import { state } from './state.js';
import { rings } from './dom.js';
import { RING_ORDER } from './constants.js';
import { showStatus } from './status.js';
import { detectAndDisplayChord } from './chordDetection.js';
import { playNote, stopNote } from './audio.js';

// Update note state on noteon/noteoff - updates ALL rings
function updateNote(noteState, e) {
    const note = e.note.number % 12;
    const midiNote = e.note.number;  // Full MIDI note for audio

    if (noteState === 'on') {
        state.noteArray[note]++;

        // Update circles in all rings
        for (const ringKey of RING_ORDER) {
            const circle = rings[ringKey]?.circles[note];
            if (circle) {
                circle.setAttribute('data-n', state.noteArray[note]);
                if (state.noteArray[note] === 1) {
                    circle.setAttribute('class', 'partial');
                }
            }
        }
        playNote(midiNote);
    } else {
        state.noteArray[note]--;

        // Update circles in all rings
        for (const ringKey of RING_ORDER) {
            const circle = rings[ringKey]?.circles[note];
            if (circle) {
                circle.setAttribute('data-n', state.noteArray[note]);
                if (state.noteArray[note] === 0) {
                    circle.setAttribute('class', 'off');
                }
            }
        }
        stopNote(midiNote);
    }

    // Debounced chord detection
    clearTimeout(state.chordTimeout);
    state.chordTimeout = setTimeout(detectAndDisplayChord, 40);
}

// Initialize WebMidi and set up event listeners
export function initMidi() {
    console.log('[JSMidiCircle] Initializing WebMidi...');

    WebMidi.enable(function(err) {
        if (err) {
            console.error('[JSMidiCircle] WebMidi.enable error:', err);
            showStatus('WebMidi error: ' + err.message, true);
            return;
        }

        console.log('[JSMidiCircle] WebMidi enabled');
        console.log('[JSMidiCircle] Inputs:', WebMidi.inputs.length);
        WebMidi.inputs.forEach((input, i) => {
            console.log(`[JSMidiCircle] Input ${i}: ${input.name} (${input.manufacturer})`);
        });

        if (WebMidi.inputs.length === 0) {
            showStatus('No MIDI input detected. Connect a device and refresh.', true);
            return;
        }

        const input = WebMidi.inputs[0];

        input.addListener('noteon', 'all', e => updateNote('on', e));
        input.addListener('noteoff', 'all', e => updateNote('off', e));

        showStatus('Connected: ' + (input.name || 'MIDI Device'));
    });
}
