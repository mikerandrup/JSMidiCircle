// Layout toggle and accidental switching
import { state } from './state.js';
import { arrangeCircles } from './geometry.js';
import { NOTE_DISPLAY, MAJOR_TRIADS } from './constants.js';
import { svgGroups } from './dom.js';

// Initialize layout with current state
export function initLayout() {
    arrangeCircles(state.useCircleOfFifths);

    // Layout toggle button
    const layoutButton = document.getElementById('layoutToggle');
    if (layoutButton) {
        layoutButton.addEventListener('click', () => {
            state.useCircleOfFifths = !state.useCircleOfFifths;
            arrangeCircles(state.useCircleOfFifths);
            layoutButton.textContent = state.useCircleOfFifths ? 'Circle of Fifths' : 'Chromatic';
        });
    }
}

// Update all note labels and tooltips based on accidental preference
export function updateAccidentals() {
    const mode = state.useFlats ? 'flats' : 'sharps';
    const noteNames = NOTE_DISPLAY[mode];
    const triads = MAJOR_TRIADS[mode];

    for (let i = 0; i < 12; i++) {
        const group = svgGroups[i];
        if (!group) continue;

        // Update text label
        const text = group.querySelector('text');
        if (text) {
            text.textContent = noteNames[i];
        }

        // Update tooltip (title element)
        const title = group.querySelector('title');
        if (title) {
            title.textContent = triads[i];
        }
    }
}

// Initialize accidentals toggle
export function initAccidentals() {
    // Apply initial state
    updateAccidentals();

    // Accidentals toggle button
    const accidentalsButton = document.getElementById('accidentalsToggle');
    if (accidentalsButton) {
        accidentalsButton.addEventListener('click', () => {
            state.useFlats = !state.useFlats;
            accidentalsButton.textContent = state.useFlats ? '♭ Flats' : '♯ Sharps';
            updateAccidentals();
        });
    }
}
