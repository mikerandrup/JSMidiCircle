// Chord detection using tonal.js
import { Chord } from 'tonal';
import { NOTE_NAMES, NOTE_DISPLAY, RING_ORDER } from './constants.js';
import { state } from './state.js';
import { rings, getChordElements } from './dom.js';

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

// Select the best chord from detected options
// Prefers simple triads (major/minor) over complex chords
function selectBestChord(detected) {
    for (const chordName of detected) {
        const info = Chord.get(chordName);
        if (info && info.type) {
            // Check if it's a simple triad (major or minor, no extensions)
            if (info.type === 'major' || info.type === 'minor') {
                return chordName;
            }
        }
        // Empty type often means major triad
        if (info && info.type === '') {
            return chordName;
        }
    }

    // Fall back to first detected
    return detected[0];
}

// Check if a chord type is minor
function isMinorChord(chordType) {
    if (!chordType) return false;
    const lowerType = chordType.toLowerCase();
    return lowerType === 'minor' ||
           lowerType === 'm' ||
           lowerType.startsWith('minor') ||
           (lowerType.startsWith('m') && !lowerType.startsWith('maj'));
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

    // Reset all circles in ALL rings to appropriate state
    for (const ringKey of RING_ORDER) {
        const ringCircles = rings[ringKey]?.circles;
        if (!ringCircles) continue;

        for (let i = 0; i < 12; i++) {
            const circle = ringCircles[i];
            if (!circle) continue;

            if (state.noteArray[i] !== 0) {
                circle.setAttribute('class', 'partial');
            } else {
                circle.setAttribute('class', 'off');
            }
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
            // Prefer simple triads (major/minor) over complex chords
            const chordName = selectBestChord(detected);
            const chordInfo = Chord.get(chordName);

            if (chordInfo && chordInfo.tonic) {
                const rootIndex = noteToIndex(chordInfo.tonic);
                const chordType = chordInfo.type || '';

                // Highlight root in the appropriate ring
                if (state.noteArray[rootIndex] !== 0) {
                    const targetRing = isMinorChord(chordType) ? 'minor' : 'major';
                    const targetCircle = rings[targetRing]?.circles[rootIndex];
                    if (targetCircle) {
                        targetCircle.setAttribute('class', 'on');
                    }
                }

                // Display formatted chord name
                if (chordElements.root && chordElements.quality) {
                    chordElements.root.textContent = formatNote(chordInfo.tonic);
                    chordElements.quality.textContent = chordType;
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
