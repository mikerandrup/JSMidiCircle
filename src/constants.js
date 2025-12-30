// Note names for chord detection (chromatic, 0-11)
// Uses flats for black keys - more standard in chord naming and better detected by tonal.js
export const NOTE_NAMES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

// Accidental display names (indexed by chromatic position)
// Only positions 1, 3, 6, 8, 10 have accidentals (black keys)
export const NOTE_DISPLAY = {
    flats:  ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'],
    sharps: ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B']
};

// Major triads for tooltips (indexed by chromatic position)
// Each entry has: name (chord name), recipe (notes to play)
export const MAJOR_TRIADS = {
    flats: [
        { name: 'C major', recipe: 'C   E   G' },
        { name: 'D♭ major', recipe: 'D♭   F   A♭' },
        { name: 'D major', recipe: 'D   F♯   A' },
        { name: 'E♭ major', recipe: 'E♭   G   B♭' },
        { name: 'E major', recipe: 'E   G♯   B' },
        { name: 'F major', recipe: 'F   A   C' },
        { name: 'G♭ major', recipe: 'G♭   B♭   D♭' },
        { name: 'G major', recipe: 'G   B   D' },
        { name: 'A♭ major', recipe: 'A♭   C   E♭' },
        { name: 'A major', recipe: 'A   C♯   E' },
        { name: 'B♭ major', recipe: 'B♭   D   F' },
        { name: 'B major', recipe: 'B   D♯   F♯' }
    ],
    sharps: [
        { name: 'C major', recipe: 'C   E   G' },
        { name: 'C♯ major', recipe: 'C♯   F   G♯' },
        { name: 'D major', recipe: 'D   F♯   A' },
        { name: 'D♯ major', recipe: 'D♯   G   A♯' },
        { name: 'E major', recipe: 'E   G♯   B' },
        { name: 'F major', recipe: 'F   A   C' },
        { name: 'F♯ major', recipe: 'F♯   A♯   C♯' },
        { name: 'G major', recipe: 'G   B   D' },
        { name: 'G♯ major', recipe: 'G♯   C   D♯' },
        { name: 'A major', recipe: 'A   C♯   E' },
        { name: 'A♯ major', recipe: 'A♯   D   F' },
        { name: 'B major', recipe: 'B   D♯   F♯' }
    ]
};
