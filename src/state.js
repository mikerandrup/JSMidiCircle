// Centralized state object - replaces closure variables from initMidi
export const state = {
    noteArray: new Array(12).fill(0),
    chordTimeout: null,
    useCircleOfFifths: true,
    useFlats: false  // true = flats (D♭), false = sharps (C♯)
};
