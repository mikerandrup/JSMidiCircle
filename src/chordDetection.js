// Chord detection using tonal.js
import { Chord } from 'tonal';
import { NOTE_NAMES, NOTE_DISPLAY } from './constants.js';
import { state } from './state.js';
import { circles, getChordElements } from './dom.js';

// Convert note name to chromatic index (0-11)
export function noteToIndex(noteName) {
    const base = noteName.charAt(0).toUpperCase();
    const accidental = noteName.slice(1);
    const baseIndex = { 'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11 }[base];
    let offset = 0;
    if (accidental.includes('#')) offset = accidental.split('#').length - 1;
    if (accidental.includes('b')) offset = -(accidental.split('b').length - 1);
    return (baseIndex + offset + 12) % 12;
}

// Format note name according to accidental preference
export function formatNote(noteName) {
    const index = noteToIndex(noteName);
    const mode = state.useFlats ? 'flats' : 'sharps';
    return NOTE_DISPLAY[mode][index];
}

// Detect and display chord from active notes
export function detectAndDisplayChord() {
    const chordElements = getChordElements();

    // Get all active note names
    const activeNotes = [];
    for (let i = 0; i < 12; i++) {
        if (state.noteArray[i] !== 0) {
            activeNotes.push(NOTE_NAMES[i]);
        }
    }

    // Reset all circles to appropriate state
    for (let i = 0; i < 12; i++) {
        if (state.noteArray[i] !== 0) {
            circles[i].setAttribute('class', 'partial');
        } else {
            circles[i].setAttribute('class', 'off');
        }
    }

    // Clear chord display by default
    if (chordElements.root) chordElements.root.textContent = '';
    if (chordElements.quality) chordElements.quality.textContent = '';
    if (chordElements.inversion) chordElements.inversion.textContent = '';

    // Show hint when 1-2 notes pressed
    if (activeNotes.length > 0 && activeNotes.length < 3) {
        if (chordElements.quality) {
            chordElements.quality.textContent = '(add more notes)';
        }
    }

    if (activeNotes.length >= 3) {
        const detected = Chord.detect(activeNotes);
        if (detected.length > 0) {
            const chordName = detected[0];
            const chordInfo = Chord.get(chordName);

            if (chordInfo && chordInfo.tonic) {
                // Highlight only the root note
                const rootIndex = noteToIndex(chordInfo.tonic);
                if (state.noteArray[rootIndex] !== 0) {
                    circles[rootIndex].setAttribute('class', 'on');
                }

                // Display formatted chord name
                if (chordElements.root && chordElements.quality) {
                    chordElements.root.textContent = formatNote(chordInfo.tonic);
                    const quality = chordInfo.type || '';
                    chordElements.quality.textContent = quality;
                }

                // Check for inversion (slash chord notation)
                if (chordElements.inversion && chordName.includes('/')) {
                    const bassNote = chordName.split('/')[1];
                    const bassIndex = noteToIndex(bassNote);
                    const rootIdx = noteToIndex(chordInfo.tonic);
                    const interval = (bassIndex - rootIdx + 12) % 12;

                    // Determine inversion based on interval from root
                    let inversionText = '';
                    if (interval === 3 || interval === 4) {
                        inversionText = '1st inversion (3rd in bass)';
                    } else if (interval === 7) {
                        inversionText = '2nd inversion (5th in bass)';
                    } else if (interval === 10 || interval === 11) {
                        inversionText = '3rd inversion (7th in bass)';
                    } else {
                        inversionText = formatNote(bassNote) + ' in bass';
                    }
                    chordElements.inversion.textContent = inversionText;
                }
            }
        }
    }
}
