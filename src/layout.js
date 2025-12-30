// Layout toggle and accidental switching
import { state } from './state.js';
import { arrangeCircles } from './geometry.js';

// Initialize layout with current state
export function initLayout() {
    arrangeCircles(state.useCircleOfFifths);

    // Layout toggle button
    const layoutButton = document.getElementById('layoutToggle');
    if (layoutButton) {
        layoutButton.addEventListener('click', () => {
            state.useCircleOfFifths = !state.useCircleOfFifths;
            arrangeCircles(state.useCircleOfFifths);
            layoutButton.textContent = state.useCircleOfFifths ? 'Circle of Fifths ❓' : 'Chromatic ❓';
        });
    }
}

// Accidental swapping (sharp/flat toggle on click)
export function switchText(element) {
    const swaps = {
        'B♭': 'A♯', 'A♯': 'B♭',
        'A♭': 'G♯', 'G♯': 'A♭',
        'G♭': 'F♯', 'F♯': 'G♭',
        'E♭': 'D♯', 'D♯': 'E♭',
        'D♭': 'C♯', 'C♯': 'D♭'
    };
    if (swaps[element.textContent]) {
        element.textContent = swaps[element.textContent];
    }
}
