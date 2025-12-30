// Layout toggle and accidental switching
import { state } from './state.js';
import { arrangeCircles } from './geometry.js';
import { NOTE_DISPLAY, RING_CONFIG, RING_ORDER, TRIAD_DATA, formatForDisplay } from './constants.js';
import { rings } from './dom.js';

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

// Update all note labels based on accidental preference (for all rings)
export function updateAccidentals() {
    const mode = state.useFlats ? 'flats' : 'sharps';
    const noteNames = NOTE_DISPLAY[mode];

    for (const ringKey of RING_ORDER) {
        const groups = rings[ringKey]?.groups;
        if (!groups) continue;

        const isMinor = ringKey === 'minor';

        for (let i = 0; i < 12; i++) {
            const group = groups[i];
            if (!group) continue;

            // Update text label
            const text = group.querySelector('text');
            if (text) {
                // Minor notes get 'm' suffix
                text.textContent = isMinor ? noteNames[i] + 'm' : noteNames[i];
            }
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

    // Set up note hover tooltips for all rings
    initNoteTooltips();
}

// Initialize hover tooltips for note circles (all rings)
function initNoteTooltips() {
    const tooltip = document.getElementById('noteTooltip');
    if (!tooltip) return;

    for (const ringKey of RING_ORDER) {
        const groups = rings[ringKey]?.groups;
        if (!groups) continue;

        const triadsKey = RING_CONFIG[ringKey].triadsKey;

        for (let i = 0; i < 12; i++) {
            const group = groups[i];
            if (!group) continue;

            group.addEventListener('mouseenter', (e) => {
                const mode = state.useFlats ? 'flats' : 'sharps';
                const triads = TRIAD_DATA[triadsKey][mode];
                const triad = triads[i];
                const recipe = formatForDisplay(triad.recipe);
                const name = formatForDisplay(triad.name);
                tooltip.innerHTML = `<div class="recipe">${recipe}</div><div class="name">${name}</div>`;
                tooltip.classList.add('visible');
                positionTooltip(e, tooltip);
            });

            group.addEventListener('mousemove', (e) => {
                positionTooltip(e, tooltip);
            });

            group.addEventListener('mouseleave', () => {
                tooltip.classList.remove('visible');
            });
        }
    }
}

// Position tooltip near cursor
function positionTooltip(e, tooltip) {
    const offset = 15;
    tooltip.style.left = (e.pageX + offset) + 'px';
    tooltip.style.top = (e.pageY + offset) + 'px';
}
