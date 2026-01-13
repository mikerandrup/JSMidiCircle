// Note names for chord detection (chromatic, 0-11)
// Uses flats for black keys - more standard in chord naming and better detected by tonal.js
export const NOTE_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Convert chromatic index (0-11) to Circle of Fifths position (0-11)
// C=0, G=1, D=2, A=3, E=4, B=5, Gb=6, Db=7, Ab=8, Eb=9, Bb=10, F=11
export function chromToCOF(index) {
    return (index * 7) % 12;
}

// Accidental display names (indexed by chromatic position)
// Only positions 1, 3, 6, 8, 10 have accidentals (black keys)
export const NOTE_DISPLAY = {
    flats:  ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'],
    sharps: ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B']
};

// Major triads for tooltips (indexed by chromatic position)
// Each entry has: name (chord name), recipe (notes to play)
// Uses ASCII accidentals (# and b) for tonal.js compatibility
export const MAJOR_TRIADS = {
    flats: [
        { name: 'C major', recipe: 'C   E   G' },
        { name: 'Db major', recipe: 'Db   F   Ab' },
        { name: 'D major', recipe: 'D   F#   A' },
        { name: 'Eb major', recipe: 'Eb   G   Bb' },
        { name: 'E major', recipe: 'E   G#   B' },
        { name: 'F major', recipe: 'F   A   C' },
        { name: 'Gb major', recipe: 'Gb   Bb   Db' },
        { name: 'G major', recipe: 'G   B   D' },
        { name: 'Ab major', recipe: 'Ab   C   Eb' },
        { name: 'A major', recipe: 'A   C#   E' },
        { name: 'Bb major', recipe: 'Bb   D   F' },
        { name: 'B major', recipe: 'B   D#   F#' }
    ],
    sharps: [
        { name: 'C major', recipe: 'C   E   G' },
        { name: 'C# major', recipe: 'C#   F   G#' },
        { name: 'D major', recipe: 'D   F#   A' },
        { name: 'D# major', recipe: 'D#   G   A#' },
        { name: 'E major', recipe: 'E   G#   B' },
        { name: 'F major', recipe: 'F   A   C' },
        { name: 'F# major', recipe: 'F#   A#   C#' },
        { name: 'G major', recipe: 'G   B   D' },
        { name: 'G# major', recipe: 'G#   C   D#' },
        { name: 'A major', recipe: 'A   C#   E' },
        { name: 'A# major', recipe: 'A#   D   F' },
        { name: 'B major', recipe: 'B   D#   F#' }
    ]
};

// Convert ASCII accidentals to Unicode for display
export function formatForDisplay(text) {
    return text.replace(/#/g, '♯').replace(/b/g, '♭');
}

// Minor triads for tooltips (indexed by chromatic position)
// Formula: root, minor 3rd (3 semitones), perfect 5th (7 semitones)
export const MINOR_TRIADS = {
    flats: [
        { name: 'C minor', recipe: 'C   Eb   G' },
        { name: 'Db minor', recipe: 'Db   E   Ab' },
        { name: 'D minor', recipe: 'D   F   A' },
        { name: 'Eb minor', recipe: 'Eb   Gb   Bb' },
        { name: 'E minor', recipe: 'E   G   B' },
        { name: 'F minor', recipe: 'F   Ab   C' },
        { name: 'Gb minor', recipe: 'Gb   A   Db' },
        { name: 'G minor', recipe: 'G   Bb   D' },
        { name: 'Ab minor', recipe: 'Ab   B   Eb' },
        { name: 'A minor', recipe: 'A   C   E' },
        { name: 'Bb minor', recipe: 'Bb   Db   F' },
        { name: 'B minor', recipe: 'B   D   F#' }
    ],
    sharps: [
        { name: 'C minor', recipe: 'C   D#   G' },
        { name: 'C# minor', recipe: 'C#   E   G#' },
        { name: 'D minor', recipe: 'D   F   A' },
        { name: 'D# minor', recipe: 'D#   F#   A#' },
        { name: 'E minor', recipe: 'E   G   B' },
        { name: 'F minor', recipe: 'F   G#   C' },
        { name: 'F# minor', recipe: 'F#   A   C#' },
        { name: 'G minor', recipe: 'G   A#   D' },
        { name: 'G# minor', recipe: 'G#   B   D#' },
        { name: 'A minor', recipe: 'A   C   E' },
        { name: 'A# minor', recipe: 'A#   C#   F' },
        { name: 'B minor', recipe: 'B   D   F#' }
    ]
};

// Ring configuration - defines layout and behavior for each ring
export const RING_CONFIG = {
    major: {
        idPrefix: 'c',           // circle IDs: c1-c12
        groupPrefix: 'g',        // group IDs: g1-g12
        radius: 100,             // distance from center to circle centers
        circleRadius: 22,        // radius of each note circle
        strokeWidth: 2,
        fontSize: 20,
        triadsKey: 'major'
    },
    minor: {
        idPrefix: 'cm',          // circle IDs: cm1-cm12
        groupPrefix: 'gm',       // group IDs: gm1-gm12
        radius: 55,              // inner ring, closer to center
        circleRadius: 14,        // smaller circles
        strokeWidth: 1.5,
        fontSize: 11,
        triadsKey: 'minor'
    }
};

// Ring order for iteration (outer to inner)
export const RING_ORDER = ['major', 'minor'];

// Triad data lookup by ring key
export const TRIAD_DATA = {
    major: MAJOR_TRIADS,
    minor: MINOR_TRIADS
};
