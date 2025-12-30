// Centralized state object - replaces closure variables from initMidi
export const state = {
    noteArray: new Array(12).fill(0),
    sustainPedal: false,
    chordTimeout: null,
    useCircleOfFifths: true
};
