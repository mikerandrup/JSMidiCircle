// Chord formula verification - runs on startup, results in browser console
import { Chord } from 'tonal';
import { MAJOR_TRIADS, NOTE_DISPLAY, formatForDisplay } from './constants.js';

// Parse recipe string into array of notes
function parseRecipe(recipe) {
    return recipe.split(/\s+/).filter(n => n.length > 0);
}

// Check if two notes are enharmonic equivalents
function areEnharmonic(a, b) {
    const enharmonics = {
        'C#': 'Db', 'Db': 'C#',
        'D#': 'Eb', 'Eb': 'D#',
        'F#': 'Gb', 'Gb': 'F#',
        'G#': 'Ab', 'Ab': 'G#',
        'A#': 'Bb', 'Bb': 'A#'
    };
    return enharmonics[a] === b || enharmonics[b] === a;
}

// Test a single chord formula
function testChord(name, recipe) {
    const notes = parseRecipe(recipe);
    const detected = Chord.detect(notes);
    const expectedRoot = name.split(' ')[0];

    for (const chordName of detected) {
        const info = Chord.get(chordName);
        if (info && info.tonic) {
            const isMajor = info.type === 'major' || info.type === '';
            if (isMajor) {
                if (info.tonic === expectedRoot || areEnharmonic(info.tonic, expectedRoot)) {
                    return { pass: true, detected: chordName, info };
                }
            }
        }
    }

    return { pass: false, detected: detected.slice(0, 3) };
}

// Run all tests and log to console
export function runChordTests() {
    console.group('🎹 Chord Formula Verification');

    let failures = 0;

    for (const mode of ['sharps', 'flats']) {
        console.group(`${mode.toUpperCase()} mode`);
        const labels = NOTE_DISPLAY[mode];

        for (let i = 0; i < MAJOR_TRIADS[mode].length; i++) {
            const triad = MAJOR_TRIADS[mode][i];
            const label = labels[i];
            const notes = parseRecipe(triad.recipe);
            const displayNotes = notes.map(n => formatForDisplay(n));
            const result = testChord(triad.name, triad.recipe);

            if (result.pass) {
                const detectedName = formatForDisplay(result.info.tonic) + ' ' + (result.info.type || 'major');
                console.log(`✓ (${label}) - [${displayNotes.join(', ')}] -> ${detectedName}`);
            } else {
                failures++;
                console.error(`✗ (${label}) - [${displayNotes.join(', ')}] -> detected as: ${result.detected.join(', ')}`);
            }
        }

        console.groupEnd();
    }

    if (failures === 0) {
        console.log('%c All chord formulas verified! ✓', 'color: green; font-weight: bold');
    } else {
        console.error(`%c ${failures} chord formula(s) failed verification`, 'color: red; font-weight: bold');
    }

    console.groupEnd();
}
