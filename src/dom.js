// DOM element caching and setup
import { RING_CONFIG, RING_ORDER } from './constants.js';
import { generateRing } from './svgGenerator.js';

// Ring data structure: rings.major.circles[], rings.major.groups[], etc.
export const rings = {};

// Legacy exports for backward compatibility
export const circles = [];
export const svgGroups = [];

// Initialize DOM element references for all rings
export function initDom() {
    const svg = document.querySelector('svg');
    if (!svg) {
        console.error('[JSMidiCircle] SVG element not found');
        return;
    }

    for (const ringKey of RING_ORDER) {
        const config = RING_CONFIG[ringKey];
        rings[ringKey] = { circles: [], groups: [] };

        // Generate minor ring SVG elements if not present
        if (ringKey === 'minor') {
            const firstMinorGroup = document.getElementById(`${config.groupPrefix}1`);
            if (!firstMinorGroup) {
                generateRing('minor', svg);
            }
        }

        // Cache DOM references
        for (let i = 1; i <= 12; i++) {
            const circle = document.getElementById(`${config.idPrefix}${i}`);
            const group = document.getElementById(`${config.groupPrefix}${i}`);

            if (group) {
                // Add data-ring attribute for consistent CSS targeting
                group.setAttribute('data-ring', ringKey);
                group.setAttribute('data-chrom', String(i - 1));
            }

            rings[ringKey].circles.push(circle);
            rings[ringKey].groups.push(group);
        }

        // Add cover circles for animation effect (only if circle exists)
        const coverRadius = config.circleRadius - 1;
        rings[ringKey].circles.forEach(circle => {
            if (circle) {
                circle.insertAdjacentHTML('afterend',
                    `<circle cx="0" cy="0" r="${coverRadius}" class="cover"/>`);
            }
        });
    }

    // Populate legacy arrays for backward compatibility
    rings.major.circles.forEach(c => circles.push(c));
    rings.major.groups.forEach(g => svgGroups.push(g));

    // Log initialization status
    const majorCount = rings.major.circles.filter(c => c !== null).length;
    const minorCount = rings.minor.circles.filter(c => c !== null).length;
    console.log(`[JSMidiCircle] DOM initialized: ${majorCount} major, ${minorCount} minor circles`);
}

// Chord display elements (cached on first access)
let _chordElements = null;
export function getChordElements() {
    if (!_chordElements) {
        _chordElements = {
            root: document.getElementById('chordRoot'),
            quality: document.getElementById('chordQuality'),
            inversion: document.getElementById('chordInversion')
        };
    }
    return _chordElements;
}
