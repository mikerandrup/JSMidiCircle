// SVG element generation for additional rings
import { RING_CONFIG } from './constants.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

// Generate SVG group with circle and text for a note
export function createNoteGroup(ringKey, chromIndex) {
    const config = RING_CONFIG[ringKey];
    const groupId = `${config.groupPrefix}${chromIndex + 1}`;
    const circleId = `${config.idPrefix}${chromIndex + 1}`;

    const group = document.createElementNS(SVG_NS, 'g');
    group.setAttribute('id', groupId);
    group.setAttribute('data-ring', ringKey);
    group.setAttribute('data-chrom', String(chromIndex));
    // Set hue based on chromatic index (0-360°, 30° per semitone)
    group.style.setProperty('--note-hue', chromIndex * 30);

    const circle = document.createElementNS(SVG_NS, 'circle');
    circle.setAttribute('class', 'off');
    circle.setAttribute('id', circleId);
    circle.setAttribute('cx', '0');
    circle.setAttribute('cy', '0');
    circle.setAttribute('r', String(config.circleRadius));
    circle.setAttribute('stroke', 'white');
    circle.setAttribute('stroke-width', String(config.strokeWidth));
    circle.setAttribute('data-n', '0');

    const text = document.createElementNS(SVG_NS, 'text');
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('alignment-baseline', 'central');
    // Don't set font-size as attribute - let CSS handle it
    text.textContent = '';  // Will be set by updateAccidentals

    group.appendChild(circle);
    group.appendChild(text);

    return group;
}

// Generate all groups for a ring and insert before chord display text
export function generateRing(ringKey, svgElement) {
    const chordDisplay = svgElement.querySelector('#chordDisplay');
    if (!chordDisplay) {
        console.error('[JSMidiCircle] chordDisplay not found in SVG');
        return;
    }

    console.log(`[JSMidiCircle] Generating ${ringKey} ring...`);

    for (let i = 0; i < 12; i++) {
        const group = createNoteGroup(ringKey, i);
        svgElement.insertBefore(group, chordDisplay);
    }

    console.log(`[JSMidiCircle] ${ringKey} ring generated`);
}
