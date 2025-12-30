// MIDI handling using WebMidi
import WebMidi from 'webmidi';
import { state } from './state.js';
import { circles } from './dom.js';
import { showStatus } from './status.js';
import { detectAndDisplayChord } from './chordDetection.js';

// Update note state on noteon/noteoff
function updateNote(noteState, e) {
    const note = e.note.number % 12;

    if (noteState === 'on') {
        state.noteArray[note]++;
        if (state.noteArray[note] === 0) state.noteArray[note] = 1;
        circles[note].setAttribute('data-n', state.noteArray[note]);
        // Initially show as partial until chord detection runs
        if (state.noteArray[note] === 1) {
            circles[note].setAttribute('class', 'partial');
        }
    } else {
        state.noteArray[note]--;
        if (state.noteArray[note] === 0) {
            if (state.sustainPedal) {
                state.noteArray[note] = -1;
            } else {
                circles[note].setAttribute('class', 'off');
            }
        }
        circles[note].setAttribute('data-n', state.noteArray[note]);
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

        input.addListener('controlchange', 'all', e => {
            if (e.controller.number === 64) {
                if (e.value > 63) {
                    state.sustainPedal = true;
                } else {
                    state.sustainPedal = false;
                    if (e.value === 0) {
                        state.noteArray.forEach((value, index) => {
                            if (value === -1) {
                                state.noteArray[index] = 0;
                                circles[index].setAttribute('data-n', 0);
                            }
                        });
                        detectAndDisplayChord();
                    }
                }
            }
        });

        showStatus('Connected: ' + (input.name || 'MIDI Device'));
    });
}
