// Note names for chord detection (chromatic, 0-11)
export const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Accidental display names (indexed by chromatic position)
// Only positions 1, 3, 6, 8, 10 have accidentals (black keys)
export const NOTE_DISPLAY = {
    flats:  ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'G♭', 'G', 'A♭', 'A', 'B♭', 'B'],
    sharps: ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B']
};

// Major triads for tooltips (indexed by chromatic position)
export const MAJOR_TRIADS = {
    flats: [
        'C major: C - E - G',
        'D♭ major: D♭ - F - A♭',
        'D major: D - F♯ - A',
        'E♭ major: E♭ - G - B♭',
        'E major: E - G♯ - B',
        'F major: F - A - C',
        'G♭ major: G♭ - B♭ - D♭',
        'G major: G - B - D',
        'A♭ major: A♭ - C - E♭',
        'A major: A - C♯ - E',
        'B♭ major: B♭ - D - F',
        'B major: B - D♯ - F♯'
    ],
    sharps: [
        'C major: C - E - G',
        'C♯ major: C♯ - E♯ - G♯',
        'D major: D - F♯ - A',
        'D♯ major: D♯ - F𝄪 - A♯',
        'E major: E - G♯ - B',
        'F major: F - A - C',
        'F♯ major: F♯ - A♯ - C♯',
        'G major: G - B - D',
        'G♯ major: G♯ - B♯ - D♯',
        'A major: A - C♯ - E',
        'A♯ major: A♯ - C𝄪 - E♯',
        'B major: B - D♯ - F♯'
    ]
};
